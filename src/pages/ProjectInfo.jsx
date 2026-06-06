import { CategoryPieChart } from '../components/CategoryPieChart'
import { getCategoryCounts, governanceRisks, mockStats } from '../data'

const functionalRequirements = [
  'Mostrar uma página inicial com apresentação do projeto.',
  'Listar serviços pet por categoria.',
  'Permitir busca por nome, bairro, categoria ou palavra-chave.',
  'Exibir detalhes com descrição, endereço, contato e horário.',
  'Receber sugestão de novo serviço.',
  'Mostrar uma área administrativa apenas conceitual.',
]

const nonFunctionalRequirements = [
  'Ser simples de usar.',
  'Funcionar bem no celular e no computador.',
  'Usar dados mockados, sem backend.',
  'Manter visual acolhedor nas cores do Velaris PetCare.',
]

const useCases = [
  'Tutor procura um serviço pet.',
  'Tutor abre os detalhes de um estabelecimento.',
  'Tutor simula um agendamento.',
  'Morador sugere um novo serviço.',
  'Administrador visualiza sugestões e dados simples.',
]

const canvasItems = [
  ['Público-alvo', 'Tutores de pets e prestadores locais.'],
  ['Proposta de valor', 'Encontrar serviços pet de bairro com mais facilidade.'],
  ['Canais', 'Site/app responsivo e contato por telefone ou WhatsApp.'],
  ['Relacionamento', 'Busca simples, sugestão da comunidade e revisão administrativa.'],
  ['Receita futura', 'Destaques para estabelecimentos e parcerias locais.'],
  ['Recursos', 'Catálogo de serviços, categorias e avaliações.'],
  ['Atividades', 'Cadastrar, revisar e divulgar serviços pet.'],
  ['Parcerias', 'Pet shops, clínicas, lojas pet, ONGs e prestadores.'],
  ['Custos', 'Hospedagem, domínio, manutenção e divulgação.'],
]

export function ProjectInfo() {
  const categoryCounts = getCategoryCounts()
  const maxCount = Math.max(...categoryCounts.map((category) => category.total), 1)

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
          Projeto Integrador 2026/1
        </p>
        <h1 className="mt-1 text-3xl font-bold text-velaris-950">Sobre o PI</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          O Velaris PetCare é um protótipo simples para divulgar serviços pet comunitários,
          seguindo o tema Conecta Comunidade do SENAI FATESG.
        </p>
      </header>

      <section className="grid gap-4 lg:grid-cols-2">
        <InfoBox title="Problema social">
          Serviços de bairro costumam ser divulgados de forma espalhada, em grupos, redes sociais e
          indicações. Isso dificulta encontrar informações confiáveis sobre endereço, horário e
          contato.
        </InfoBox>
        <InfoBox title="Objetivo geral">
          Criar um MVP navegável para centralizar serviços pet locais e facilitar a consulta por
          bairro, categoria e palavra-chave.
        </InfoBox>
        <InfoBox title="Objetivos específicos">
          <SimpleList
            items={[
              'Organizar serviços por categoria.',
              'Mostrar contato, endereço e horário.',
              'Criar busca simples.',
              'Permitir sugestão de novo serviço.',
              'Apresentar dados simples para a banca.',
            ]}
          />
        </InfoBox>
        <InfoBox title="Comunidade, viabilidade e impacto">
          O projeto ajuda tutores a encontrar serviços locais e dá mais visibilidade a pequenos
          negócios. É viável porque funciona como front-end com dados mockados, sem depender de
          backend nesta etapa.
        </InfoBox>
      </section>

      <SectionTitle>Integração com as disciplinas</SectionTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <InfoBox title="Algoritmos e Programação">
          <SimpleList
            items={[
              'Uso de vetores/listas para serviços, categorias e sugestões.',
              'Filtro com condições para nome, bairro e categoria.',
              'Repetição com map para exibir cards na tela.',
              'Formulários controlados com estados do React.',
            ]}
          />
        </InfoBox>
        <InfoBox title="Engenharia de Software">
          <SimpleList
            items={[
              'Levantamento de requisitos funcionais e não funcionais.',
              'Casos de uso resumidos.',
              'Protótipo navegável com rotas.',
              'Organização por páginas, componentes e dados.',
            ]}
          />
        </InfoBox>
        <InfoBox title="Matemática Aplicada Computacional">
          <SimpleList
            items={[
              'Contagem de serviços por categoria.',
              'Total de agendamentos simulados.',
              'Total de sugestões recebidas.',
              'Representação visual simples com cards, barras e gráfico de pizza.',
            ]}
          />
        </InfoBox>
        <InfoBox title="Governança de TI e Empreendedorismo">
          <SimpleList
            items={[
              'Análise do problema social.',
              'Viabilidade da proposta.',
              'Valor para a comunidade.',
              'Riscos e ações preventivas com base no Risk IT.',
              'Business Model Canvas simplificado.',
            ]}
          />
        </InfoBox>
      </div>

      <SectionTitle>Requisitos do protótipo</SectionTitle>
      <div className="grid gap-4 lg:grid-cols-2">
        <InfoBox title="Requisitos funcionais">
          <SimpleList items={functionalRequirements} />
        </InfoBox>
        <InfoBox title="Requisitos não funcionais">
          <SimpleList items={nonFunctionalRequirements} />
        </InfoBox>
        <InfoBox title="Casos de uso resumidos">
          <SimpleList items={useCases} />
        </InfoBox>
        <InfoBox title="Fluxo do usuário">
          <SimpleList
            ordered
            items={[
              'Entrar na página inicial.',
              'Buscar ou escolher uma categoria.',
              'Ver os cards de serviços.',
              'Abrir os detalhes.',
              'Simular agendamento ou sugerir serviço.',
            ]}
          />
        </InfoBox>
      </div>

      <SectionTitle>Dados simples e matemática</SectionTitle>
      <div className="grid gap-4 sm:grid-cols-3">
        <SimpleStat label="Serviços cadastrados" value={mockStats.totalServices} />
        <SimpleStat label="Agendamentos simulados" value={mockStats.simulatedAppointments} />
        <SimpleStat label="Sugestões recebidas" value={mockStats.suggestionsReceived} />
      </div>

      <div className="mt-5">
        <CategoryPieChart data={categoryCounts} />
        <p className="mt-3 rounded-2xl bg-velaris-50 p-4 text-sm leading-6 text-slate-700">
          Os dados apresentados são simulados com base nos serviços cadastrados no MVP. Como existem
          6 serviços distribuídos em 6 categorias, cada categoria representa 1/6 do total,
          aproximadamente 16,67%. Essa contagem ajuda a visualizar a distribuição dos serviços
          dentro da plataforma.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-velaris-950">Serviços por categoria</h3>
        <div className="mt-4 space-y-3">
          {categoryCounts.map((category) => (
            <div key={category.id}>
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{category.label}</span>
                <span className="font-semibold text-velaris-900">{category.total}</span>
              </div>
              <div className="mt-2 h-3 rounded-full bg-velaris-50">
                <div
                  className="h-3 rounded-full bg-velaris-600"
                  style={{ width: `${(category.total / maxCount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionTitle>Business Model Canvas simples</SectionTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {canvasItems.map(([title, text]) => (
          <InfoBox key={title} title={title}>
            {text}
          </InfoBox>
        ))}
      </div>

      <SectionTitle>Segurança e Governança</SectionTitle>
      <div className="overflow-hidden rounded-2xl border border-velaris-100 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-velaris-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Risco</th>
                <th className="px-4 py-3 font-semibold">Impacto</th>
                <th className="px-4 py-3 font-semibold">Prevenção</th>
              </tr>
            </thead>
            <tbody>
              {governanceRisks.slice(0, 4).map((item) => (
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
    </div>
  )
}

function SectionTitle({ children }) {
  return <h2 className="mb-4 mt-10 text-2xl font-bold text-velaris-950">{children}</h2>
}

function InfoBox({ title, children }) {
  return (
    <article className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-velaris-950">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-600">{children}</div>
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

function SimpleStat({ label, value }) {
  return (
    <article className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-velaris-950">{value}</p>
    </article>
  )
}
