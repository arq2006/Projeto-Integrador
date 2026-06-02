import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { CategoryButtons } from '../components/CategoryButtons'
import { ServiceCard } from '../components/ServiceCard'
import { StatsCard } from '../components/StatsCard'
import { mockPetShops, mockStats, serviceCategories } from '../data'
import { PATHS } from '../routes/paths'

export function Home() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [loc, setLoc] = useState('')

  const featured = useMemo(() => mockPetShops.slice(0, 3), [])

  function handleSearch() {
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (loc.trim()) params.set('local', loc.trim())
    navigate(`${PATHS.services}?${params.toString()}`)
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-velaris-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
              Velaris PetCare
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-velaris-950 sm:text-5xl">
              Conectando cuidado e confiança para seu pet.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Um MVP comunitário para aproximar tutores de pet shops, clínicas veterinárias e
              prestadores locais com informações organizadas, busca simples e agendamento simulado.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
              O problema atendido é a dificuldade de encontrar serviços pet confiáveis no bairro,
              comparar horários e saber quais cuidados especiais cada estabelecimento oferece.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={PATHS.services}
                className="inline-flex items-center gap-2 rounded-2xl bg-velaris-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-velaris-600/30 transition hover:bg-velaris-700"
              >
                <span aria-hidden>🔎</span>
                Buscar serviços pet
              </Link>
              <Link
                to={PATHS.projectInfo}
                className="inline-flex items-center rounded-2xl border border-velaris-200 bg-white/80 px-6 py-3 text-base font-semibold text-velaris-900 backdrop-blur hover:border-velaris-400"
              >
                Sobre o PI
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-float-soft relative w-full max-w-md overflow-hidden rounded-3xl border border-velaris-100 bg-white shadow-[var(--shadow-soft)]">
              <img
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=640&fit=crop"
                alt="Cão e gato juntos"
                className="h-72 w-full object-cover sm:h-80"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-velaris-950/80 to-transparent p-4 text-white">
                <p className="text-sm font-medium">Comunidade que cuida</p>
                <p className="text-xs text-white/80">Serviços locais, avaliações e agenda demo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <SearchBar
            query={q}
            onQueryChange={setQ}
            location={loc}
            onLocationChange={setLoc}
            onSubmit={handleSearch}
          />
        </div>
      </section>

      <section id="servicos" className="border-y border-velaris-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-velaris-950">Categorias de serviços</h2>
          <p className="mt-1 text-sm text-slate-600">
            Escolha uma categoria para ver estabelecimentos cadastrados nos dados mockados.
          </p>
          <div className="mt-6">
            <CategoryButtons categories={serviceCategories} />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-velaris-950">Serviços em destaque</h2>
              <p className="mt-1 text-slate-600">
                Cards com bairro, categoria, avaliação e horário de funcionamento.
              </p>
            </div>
            <Link
              to={PATHS.services}
              className="text-sm font-semibold text-velaris-700 hover:text-velaris-900"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((service) => (
              <ServiceCard key={service.id} service={service} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-velaris-950">Objetivo do projeto</h2>
            <p className="mt-3 text-slate-600">
              Facilitar a descoberta e o agendamento de serviços pet comunitários, fortalecendo a
              relação entre tutores, pequenos negócios e profissionais locais.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Organizar serviços por categoria e bairro.',
                'Ajudar tutores a comparar horários e avaliações.',
                'Receber sugestões de novos estabelecimentos.',
                'Demonstrar um MVP viável com React e dados mockados.',
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-velaris-50 p-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div id="contato" className="rounded-3xl border border-velaris-100 bg-velaris-50/60 p-6">
            <h3 className="text-lg font-semibold text-velaris-900">Participação da comunidade</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Qualquer tutor pode sugerir um serviço local para revisão administrativa, mantendo a
              plataforma viva e mais próxima das necessidades do bairro.
            </p>
            <Link
              to={PATHS.suggestService}
              className="mt-5 inline-flex rounded-xl bg-velaris-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-velaris-700"
            >
              Sugerir serviço
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-velaris-900 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <StatsCard
            label="Serviços cadastrados"
            value={mockStats.totalServices}
            helper="Mock inicial para demonstração."
            icon="📋"
          />
          <StatsCard
            label="Categorias"
            value={serviceCategories.length}
            helper="Cobertura do escopo do PDF."
            icon="🧭"
          />
          <StatsCard
            label="Agendamentos simulados"
            value={mockStats.simulatedAppointments}
            helper="Fluxos de usuário e admin."
            icon="📅"
          />
          <StatsCard
            label="Bairros atendidos"
            value={mockStats.activeNeighborhoods}
            helper="Recorte comunitário local."
            icon="📍"
          />
        </div>
      </section>
    </div>
  )
}
