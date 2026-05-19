import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { CategoryButtons } from '../components/CategoryButtons'
import { CardPetShop } from '../components/CardPetShop'
import { mockPetShops, serviceCategories } from '../data'
import { PATHS } from '../routes/paths'

/**
 * Landing page — hero, busca, categorias, destaques e faixa de valor.
 */
export function Home() {
  const navigate = useNavigate()
  const [q, setQ] = useState('')
  const [loc, setLoc] = useState('')

  const featured = useMemo(() => mockPetShops.slice(0, 3), [])

  function handleSearch() {
    const params = new URLSearchParams()
    if (q.trim()) params.set('q', q.trim())
    if (loc.trim()) params.set('local', loc.trim())
    navigate(`${PATHS.petShops}?${params.toString()}`)
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-velaris-50 via-white to-velaris-100">
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-velaris-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-velaris-300/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
              Velaris PetCare
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-tight text-velaris-950 sm:text-5xl">
              Conectando cuidado e confiança para seu pet.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              Encontre pet shops verificados, compare serviços e agende em poucos cliques — tudo
              pensado para o bem-estar do seu melhor amigo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={PATHS.petShops}
                className="inline-flex items-center gap-2 rounded-2xl bg-velaris-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-velaris-600/30 transition hover:bg-velaris-700"
              >
                <span aria-hidden>🔎</span>
                Encontrar Pet Shops
              </Link>
              <Link
                to={PATHS.cadastro}
                className="inline-flex items-center rounded-2xl border border-velaris-200 bg-white/80 px-6 py-3 text-base font-semibold text-velaris-900 backdrop-blur hover:border-velaris-400"
              >
                Criar conta grátis
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
                <p className="text-xs text-white/80">Avaliações reais e agenda transparente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
          <SearchBar
            query={q}
            onQueryChange={setQ}
            location={loc}
            onLocationChange={setLoc}
            onSubmit={handleSearch}
          />
        </div>
      </section>

      {/* Categorias */}
      <section id="servicos" className="border-y border-velaris-100 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-velaris-950">Serviços em destaque</h2>
          <p className="mt-1 text-sm text-slate-600">Toque para filtrar pet shops por categoria.</p>
          <div className="mt-6">
            <CategoryButtons categories={serviceCategories} />
          </div>
        </div>
      </section>

      {/* Pet shops em destaque */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-velaris-950">Pet Shops em destaque</h2>
              <p className="mt-1 text-slate-600">Curadoria com base em avaliações e completude do perfil.</p>
            </div>
            <Link
              to={PATHS.petShops}
              className="text-sm font-semibold text-velaris-700 hover:text-velaris-900"
            >
              Ver todos →
            </Link>
          </div>
          <div className="mt-8 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featured.map((shop) => (
              <CardPetShop key={shop.id} shop={shop} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Sobre + contato */}
      <section id="sobre" className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div id="contato">
            <h2 className="text-2xl font-bold text-velaris-950">Sobre a Velaris</h2>
            <p className="mt-3 text-slate-600">
              Somos uma plataforma comunitária que aproxima tutores de estabelecimentos de confiança.
              Profissionais qualificados, avaliações verificáveis e agendamento simples — sem surpresas
              na hora do cuidado.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li>✓ Profissionais qualificados</li>
              <li>✓ Avaliações reais da comunidade</li>
              <li>✓ Agenda organizada por horário</li>
              <li>✓ Foco total no bem-estar pet</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-velaris-100 bg-velaris-50/50 p-8 shadow-inner">
            <h3 className="text-lg font-semibold text-velaris-900">Contato</h3>
            <p className="mt-2 text-sm text-slate-600">
              Dúvidas ou parcerias: <strong>contato@velarispetcare.com.br</strong>
            </p>
            <p className="mt-4 text-xs text-slate-500">
              Esta versão é front-end puro; formulários abrem alertas de demonstração.
            </p>
          </div>
        </div>
      </section>

      {/* Faixa roxa — benefícios */}
      <section className="bg-velaris-900 py-12 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { icon: '🎓', t: 'Profissionais qualificados', d: 'Perfis completos e selos de verificação.' },
            { icon: '💬', t: 'Avaliações reais', d: 'Feedback da comunidade para decisões seguras.' },
            { icon: '📆', t: 'Agenda fácil', d: 'Escolha data, horário e serviço em um fluxo guiado.' },
            { icon: '❤️', t: 'Cuidado pet', d: 'Do banho ao vet — tudo em um só lugar.' },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <span className="text-2xl">{x.icon}</span>
              <p className="mt-3 font-semibold">{x.t}</p>
              <p className="mt-1 text-sm text-velaris-200">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
