import { StatsCard } from '../components/StatsCard'
import { getCategoryCounts, governanceRisks, mockStats } from '../data'

const functionalRequirements = [
  'Listar serviços pet por categoria.',
  'Buscar por nome, bairro, categoria e palavra-chave.',
  'Exibir detalhes de cada estabelecimento.',
  'Permitir agendamento simulado de serviço.',
  'Permitir sugestão de novo serviço pela comunidade.',
  'Exibir painel administrativo conceitual.',
]

const nonFunctionalRequirements = [
  'Interface responsiva para celular e desktop.',
  'Navegação simples com React Router DOM.',
  'Dados mockados organizados para futura API.',
  'Layout moderno, acolhedor e consistente com a marca.',
  'Componentização limpa e reutilizável.',
]

const useCases = [
  'Tutor busca um serviço por bairro e categoria.',
  'Tutor acessa detalhes, confere cuidados especiais e agenda.',
  'Morador sugere um estabelecimento ainda não cadastrado.',
  'Administrador revisa sugestões e acompanha indicadores simulados.',
]

const userFlow = [
  'Acessar a Home.',
  'Buscar ou selecionar uma categoria.',
  'Comparar cards de serviços.',
  'Abrir detalhes do estabelecimento.',
  'Agendar ou sugerir novo serviço.',
]

export function ProjectInfo() {
  const categoryCounts = getCategoryCounts()
  const maxCount = Math.max(...categoryCounts.map((category) => category.total), 1)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
          Projeto Integrador 2026/1
        </p>
        <h1 className="mt-1 text-3xl font-bold text-velaris-950">Velaris PetCare</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          MVP demonstrativo em React para divulgação e agendamento de serviços pet comunitários,
          conectando tutores a pet shops, clínicas veterinárias e prestadores locais.
        </p>
      </header>

      <section className="grid gap-5 lg:grid-cols-2">
        <InfoPanel title="Problema social">
          Tutores nem sempre encontram informações confiáveis sobre serviços pet próximos, horários,
          avaliações e cuidados especiais. Pequenos prestadores locais também têm dificuldade para
          divulgar seus serviços de forma organizada.
        </InfoPanel>
        <InfoPanel title="Objetivo geral">
          Criar um protótipo navegável que centralize serviços pet locais, facilite a busca por
          categoria e bairro e demonstre o fluxo de agendamento com dados mockados.
        </InfoPanel>
        <InfoPanel title="Objetivos específicos">
          <SimpleList
            items={[
              'Mapear categorias essenciais de serviços pet.',
              'Disponibilizar busca e filtros funcionais.',
              'Criar detalhes completos dos estabelecimentos.',
              'Simular agendamentos e sugestões da comunidade.',
            ]}
          />
        </InfoPanel>
        <InfoPanel title="Relação com a comunidade">
          A plataforma valoriza estabelecimentos de bairro, dá visibilidade a prestadores locais e
          permite que moradores sugiram novos serviços para validação administrativa.
        </InfoPanel>
        <InfoPanel title="Viabilidade">
          O MVP usa React, Vite, React Router DOM e dados mockados, permitindo demonstração sem
          backend e evolução futura para API, autenticação e banco de dados.
        </InfoPanel>
        <InfoPanel title="Impacto">
          O projeto pode reduzir tempo de busca, aumentar confiança entre tutores e prestadores e
          apoiar a economia local de cuidados pet.
        </InfoPanel>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-velaris-950">Tecnologias usadas</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {['React', 'Vite', 'React Router DOM', 'CSS/Tailwind organizado', 'Dados mockados'].map(
            (tech) => (
              <span
                key={tech}
                className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-velaris-800 ring-1 ring-velaris-100"
              >
                {tech}
              </span>
            ),
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-velaris-950">Matemática aplicada</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label="Serviços" value={mockStats.totalServices} icon="📋" />
          <StatsCard label="Agendamentos" value={mockStats.simulatedAppointments} icon="📅" />
          <StatsCard label="Sugestões" value={mockStats.suggestionsReceived} icon="💬" />
          <StatsCard label="Bairros" value={mockStats.activeNeighborhoods} icon="📍" />
        </div>
        <div className="mt-6 rounded-3xl border border-velaris-100 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-velaris-950">
            Quantidade de serviços por categoria
          </h3>
          <div className="mt-4 space-y-4">
            {categoryCounts.map((category) => (
              <div key={category.id}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-slate-700">{category.label}</span>
                  <span className="font-semibold text-velaris-900">{category.total}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-velaris-50">
                  <div
                    className="h-full rounded-full bg-velaris-600"
                    style={{ width: `${(category.total / maxCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-velaris-950">Engenharia de Software</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <InfoPanel title="Requisitos funcionais">
            <SimpleList items={functionalRequirements} />
          </InfoPanel>
          <InfoPanel title="Requisitos não funcionais">
            <SimpleList items={nonFunctionalRequirements} />
          </InfoPanel>
          <InfoPanel title="Casos de uso resumidos">
            <SimpleList items={useCases} />
          </InfoPanel>
          <InfoPanel title="Fluxo do usuário">
            <SimpleList items={userFlow} ordered />
          </InfoPanel>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-velaris-950">Segurança e Governança</h2>
        <div className="mt-5 overflow-hidden rounded-3xl border border-velaris-100 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-velaris-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Risco identificado</th>
                  <th className="px-4 py-3 font-semibold">Impacto</th>
                  <th className="px-4 py-3 font-semibold">Ação preventiva</th>
                </tr>
              </thead>
              <tbody>
                {governanceRisks.map((item) => (
                  <tr key={item.id} className="border-t border-velaris-100">
                    <td className="px-4 py-3 font-medium text-velaris-950">{item.risk}</td>
                    <td className="px-4 py-3 text-slate-600">{item.impact}</td>
                    <td className="px-4 py-3 text-slate-600">{item.preventiveAction}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoPanel({ title, children }) {
  return (
    <article className="rounded-3xl border border-velaris-100 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-velaris-950">{title}</h2>
      <div className="mt-3 text-sm leading-6 text-slate-600">{children}</div>
    </article>
  )
}

function SimpleList({ items, ordered = false }) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className={ordered ? 'list-decimal space-y-2 pl-5' : 'list-disc space-y-2 pl-5'}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </Tag>
  )
}
