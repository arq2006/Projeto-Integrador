import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SearchBar } from '../components/SearchBar'
import { CardPetShop } from '../components/CardPetShop'
import { mockPetShops, serviceCategories } from '../data'

/**
 * Lista de pet shops com busca e filtros refletidos na URL (substituível por chamadas à API).
 */
export function Petshops() {
  const [params, setParams] = useSearchParams()

  const query = params.get('q') ?? ''
  const location = params.get('local') ?? ''
  const bairro = params.get('bairro') ?? ''
  const servico = params.get('categoria') ?? ''
  const minRating = params.get('min') ?? ''
  const sort = params.get('ordenar') ?? 'rating'

  function patchParams(updates) {
    const next = new URLSearchParams(params)
    Object.entries(updates).forEach(([key, value]) => {
      if (value === '' || value == null) next.delete(key)
      else next.set(key, String(value))
    })
    setParams(next, { replace: true })
  }

  const bairros = useMemo(
    () => [...new Set(mockPetShops.map((p) => p.neighborhood))].sort(),
    [],
  )

  const filtered = useMemo(() => {
    let list = [...mockPetShops]
    const q = query.trim().toLowerCase()
    const loc = location.trim().toLowerCase()

    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.services.some((s) => s.toLowerCase().includes(q)) ||
          p.tagline.toLowerCase().includes(q),
      )
    }
    if (loc) {
      list = list.filter(
        (p) =>
          p.neighborhood.toLowerCase().includes(loc) ||
          p.city.toLowerCase().includes(loc) ||
          p.address.toLowerCase().includes(loc),
      )
    }
    if (bairro) {
      list = list.filter((p) => p.neighborhood === bairro)
    }
    if (servico) {
      list = list.filter((p) => p.serviceIds?.includes(servico))
    }
    if (minRating) {
      const m = Number(minRating)
      if (!Number.isNaN(m)) list = list.filter((p) => p.rating >= m)
    }

    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))

    return list
  }, [query, location, bairro, servico, minRating, sort])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-velaris-950">Pet Shops</h1>
        <p className="mt-1 text-slate-600">
          Compare perfis, serviços e avaliações — dados mockados para demonstração.
        </p>
      </header>

      <SearchBar
        query={query}
        onQueryChange={(v) => patchParams({ q: v })}
        location={location}
        onLocationChange={(v) => patchParams({ local: v })}
        onSubmit={() => patchParams({})}
        className="mb-6"
      />

      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-sm font-medium text-velaris-900">
          Bairro
          <select
            value={bairro}
            onChange={(e) => patchParams({ bairro: e.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Todos</option>
            {bairros.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-velaris-900">
          Serviço
          <select
            value={servico}
            onChange={(e) => patchParams({ categoria: e.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Todos</option>
            {serviceCategories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm font-medium text-velaris-900">
          Avaliação mín.
          <select
            value={minRating}
            onChange={(e) => patchParams({ min: e.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Qualquer</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </label>
        <label className="text-sm font-medium text-velaris-900">
          Ordenar
          <select
            value={sort}
            onChange={(e) => patchParams({ ordenar: e.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="rating">Melhor avaliação</option>
            <option value="name">Nome (A–Z)</option>
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-slate-500">{filtered.length} resultado(s)</p>

      <div className="flex flex-col gap-5">
        {filtered.map((shop) => (
          <CardPetShop key={shop.id} shop={shop} variant="list" />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-velaris-200 bg-white py-12 text-center text-slate-600">
            Nenhum pet shop encontrado com esses filtros.
          </p>
        )}
      </div>

      {filtered.length > 0 && (
        <nav
          className="mt-10 flex justify-center gap-2 text-sm font-semibold text-velaris-800"
          aria-label="Paginação"
        >
          {[1, 2, 3, '…', 10].map((p, i) => (
            <span
              key={i}
              className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                p === 1 ? 'bg-velaris-600 text-white' : 'border border-velaris-200 bg-white'
              }`}
            >
              {p}
            </span>
          ))}
        </nav>
      )}
    </div>
  )
}
