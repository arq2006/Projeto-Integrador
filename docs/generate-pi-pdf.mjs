import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const sourcePath = path.join(__dirname, 'velaris-petcare-pi-apresentacao.html')
const outputPath = path.join(__dirname, 'velaris-petcare-pi-apresentacao.pdf')

const PAGE_WIDTH = 595.28
const PAGE_HEIGHT = 841.89
const MARGIN_X = 44
const MARGIN_BOTTOM = 48
const TOP_Y = PAGE_HEIGHT - 54
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2

function sanitizeText(value) {
  return value
    .replace(/\u2013|\u2014/g, '-')
    .replace(/\u2018|\u2019/g, "'")
    .replace(/\u201c|\u201d/g, '"')
    .replace(/\u00a0/g, ' ')
    .replace(/[^\x09\x0a\x0d\x20-\xff]/g, '')
}

function escapePdfText(value) {
  return sanitizeText(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)')
}

function stripHtml(value) {
  return value
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<\/li>/gi, '\n')
    .replace(/<tr[^>]*>/gi, '\n')
    .replace(/<\/tr>/gi, '\n')
    .replace(/<t[hd][^>]*>/gi, ' | ')
    .replace(/<\/t[hd]>/gi, ' ')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .split('\n')
    .map((line) => sanitizeText(line.replace(/\s+/g, ' ').trim()))
    .filter(Boolean)
}

function wrapText(text, fontSize, maxWidth) {
  const avgWidth = fontSize * 0.49
  const maxChars = Math.max(18, Math.floor(maxWidth / avgWidth))
  const words = text.split(/\s+/)
  const lines = []
  let line = ''

  for (const word of words) {
    if (!line) {
      line = word
      continue
    }
    if ((line + ' ' + word).length <= maxChars) {
      line += ' ' + word
    } else {
      lines.push(line)
      line = word
    }
  }

  if (line) lines.push(line)
  return lines
}

class PdfBuilder {
  constructor() {
    this.objects = []
    this.pages = []
    this.current = null
    this.pageNo = 0
    this.sectionTitle = 'Velaris PetCare'
  }

  addObject(body) {
    this.objects.push(body)
    return this.objects.length
  }

  startPage(sectionTitle) {
    if (this.current) this.finishPage()
    this.pageNo += 1
    this.sectionTitle = sectionTitle || this.sectionTitle
    this.current = {
      commands: [],
      y: TOP_Y,
    }
    this.drawHeader()
  }

  finishPage() {
    if (!this.current) return
    this.drawFooter()
    const content = this.current.commands.join('\n')
    const contentObject = this.addObject(`<< /Length ${Buffer.byteLength(content, 'latin1')} >>\nstream\n${content}\nendstream`)
    const pageObject = this.addObject(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R /F3 5 0 R >> >> /Contents ${contentObject} 0 R >>`,
    )
    this.pages.push(pageObject)
    this.current = null
  }

  drawHeader() {
    this.rect(0, PAGE_HEIGHT - 38, PAGE_WIDTH, 38, [0.35, 0.12, 0.55])
    this.text('Velaris PetCare - Documento de Apresentacao do PI 2026/1', 44, PAGE_HEIGHT - 24, 10, 'F2', [1, 1, 1])
    this.rect(0, 0, PAGE_WIDTH, 24, [0.96, 0.94, 1])
  }

  drawFooter() {
    this.text(`Pagina ${this.pageNo}`, PAGE_WIDTH - 92, 24, 9, 'F1', [0.45, 0.45, 0.55])
    this.text(this.sectionTitle, 44, 24, 9, 'F1', [0.45, 0.45, 0.55])
  }

  ensureSpace(height) {
    if (this.current.y - height < MARGIN_BOTTOM) {
      this.startPage(`${this.sectionTitle} (continuação)`)
    }
  }

  rect(x, y, w, h, rgb) {
    const [r, g, b] = rgb
    this.current.commands.push(`${r} ${g} ${b} rg ${x} ${y} ${w} ${h} re f`)
  }

  text(value, x, y, fontSize, font = 'F1', rgb = [0.12, 0.1, 0.3]) {
    const [r, g, b] = rgb
    this.current.commands.push(
      `BT /${font} ${fontSize} Tf ${r} ${g} ${b} rg ${x} ${y} Td (${escapePdfText(value)}) Tj ET`,
    )
  }

  addHeading(value, level) {
    const fontSize = level === 1 ? 24 : level === 2 ? 18 : 13
    const gap = level === 1 ? 22 : level === 2 ? 18 : 14
    this.ensureSpace(gap + 8)
    const color = level === 1 ? [0.22, 0.03, 0.39] : [0.38, 0.13, 0.66]
    this.text(value, MARGIN_X, this.current.y, fontSize, 'F2', color)
    this.current.y -= gap
  }

  addParagraph(value, options = {}) {
    const fontSize = options.fontSize || 10.7
    const x = options.x || MARGIN_X
    const width = options.width || CONTENT_WIDTH
    const lineHeight = options.lineHeight || fontSize + 4
    const font = options.font || 'F1'
    const color = options.color || [0.2, 0.24, 0.33]
    const lines = wrapText(value, fontSize, width)
    this.ensureSpace(lines.length * lineHeight + 4)
    for (const line of lines) {
      this.text(line, x, this.current.y, fontSize, font, color)
      this.current.y -= lineHeight
    }
    this.current.y -= 3
  }

  addBullet(value) {
    this.ensureSpace(18)
    this.text('-', MARGIN_X + 8, this.current.y, 10.8, 'F2', [0.42, 0.14, 0.7])
    this.addParagraph(value, { x: MARGIN_X + 22, width: CONTENT_WIDTH - 22, fontSize: 10.4 })
  }

  addRule() {
    this.ensureSpace(12)
    this.rect(MARGIN_X, this.current.y, CONTENT_WIDTH, 1, [0.86, 0.77, 1])
    this.current.y -= 12
  }

  build() {
    this.finishPage()
    const catalogObject = 1
    const pagesObject = 2
    const fontRegular = 3
    const fontBold = 4
    const fontMono = 5

    this.objects[catalogObject - 1] = `<< /Type /Catalog /Pages ${pagesObject} 0 R >>`
    this.objects[pagesObject - 1] =
      `<< /Type /Pages /Kids [${this.pages.map((page) => `${page} 0 R`).join(' ')}] /Count ${this.pages.length} >>`
    this.objects[fontRegular - 1] =
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>'
    this.objects[fontBold - 1] =
      '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>'
    this.objects[fontMono - 1] =
      '<< /Type /Font /Subtype /Type1 /BaseFont /Courier /Encoding /WinAnsiEncoding >>'

    let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n'
    const offsets = [0]
    for (let i = 0; i < this.objects.length; i += 1) {
      offsets.push(Buffer.byteLength(pdf, 'latin1'))
      pdf += `${i + 1} 0 obj\n${this.objects[i]}\nendobj\n`
    }

    const xref = Buffer.byteLength(pdf, 'latin1')
    pdf += `xref\n0 ${this.objects.length + 1}\n`
    pdf += '0000000000 65535 f \n'
    for (let i = 1; i < offsets.length; i += 1) {
      pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
    }
    pdf += `trailer\n<< /Size ${this.objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`
    return Buffer.from(pdf, 'latin1')
  }
}

const html = fs.readFileSync(sourcePath, 'utf8')
const sectionMatches = [...html.matchAll(/<section class="page[^"]*">([\s\S]*?)<\/section>/gi)]
const sections = sectionMatches.map((match) => stripHtml(match[1]))

const pdf = new PdfBuilder()
pdf.objects = ['', '', '', '', '']

for (const lines of sections) {
  const titleLine = lines.find((line) => line.startsWith('# ')) || lines.find((line) => line.startsWith('## '))
  const title = titleLine ? titleLine.replace(/^#+\s*/, '') : 'Velaris PetCare'
  pdf.startPage(title)

  for (const line of lines) {
    if (line.startsWith('# ')) {
      pdf.addHeading(line.slice(2), 1)
      pdf.addRule()
    } else if (line.startsWith('## ')) {
      pdf.addHeading(line.slice(3), 2)
    } else if (line.startsWith('### ')) {
      pdf.addHeading(line.slice(4), 3)
    } else if (line.startsWith('- ')) {
      pdf.addBullet(line.slice(2))
    } else if (line.includes(' | ')) {
      pdf.addParagraph(line.replace(/\s+\|\s+/g, ' | '), {
        fontSize: 9.2,
        lineHeight: 12,
        font: 'F3',
        color: [0.18, 0.2, 0.27],
      })
    } else {
      pdf.addParagraph(line)
    }
  }
}

fs.writeFileSync(outputPath, pdf.build())
console.log(outputPath)
