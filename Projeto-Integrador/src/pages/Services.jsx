import { useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { CategoryFilter } from '../components/CategoryFilter'
import { SearchBar } from '../components/SearchBar'
import { ServiceCard } from '../components/ServiceCard'
import { mockPetShops, serviceCategories } from '../data'
import { PATHS } from '../routes/paths'

export function Services() {
  const [params, setParams] = useSearchParams()

  const query = params.get('q') ?? ''
  const location = params.get('local') ?? ''
  const bairro = params.get('bairro') ?? ''
  const categoria = params.get('categoria') ?? ''

  function patchParams(updates) {
    const next = new URLSearchParams(params)

    Object.entries(updates).forEach(([key, value]) => {
      if (value === '' || value == null) next.delete(key)
      else next.set(key, String(value))
    })

    setParams(next, { replace: true })
  }

  const bairros = useMemo(
    () => [...new Set(mockPetShops.map((service) => service.neighborhood))].sort(),
    [],
  )

  const filtered = useMemo(() => {
    const search = query.trim().toLowerCase()
    const local = location.trim().toLowerCase()

    return mockPetShops
      .filter((service) => {
        const text = [
          service.name,
          service.category,
          service.description,
          service.neighborhood,
          service.city,
          ...service.services,
          ...service.keywords,
        ]
          .join(' ')
          .toLowerCase()

        const matchesSearch = !search || text.includes(search)
        const matchesLocation =
          !local ||
          [service.neighborhood, service.city, service.address]
            .join(' ')
            .toLowerCase()
            .includes(local)
        const matchesBairro = !bairro || service.neighborhood === bairro
        const matchesCategoria = !categoria || service.serviceIds?.includes(categoria)

        return matchesSearch && matchesLocation && matchesBairro && matchesCategoria
      })
      .sort((a, b) => a.name.localeCompare(b.name, 'pt-BR'))
  }, [query, location, bairro, categoria])

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
            Serviços pet comunitários
          </p>
          <h1 className="mt-1 text-3xl font-bold text-velaris-950">
            Buscar serviços e estabelecimentos
          </h1>
          <p className="mt-1 max-w-2xl text-slate-600">
            Busca simples por nome, bairro, categoria ou palavra-chave, usando dados mockados.
          </p>
        </div>
        <Link
          to={PATHS.suggestService}
          className="inline-flex justify-center rounded-xl border border-velaris-200 bg-white px-4 py-2 text-sm font-semibold text-velaris-800 transition hover:border-velaris-400 hover:bg-velaris-50"
        >
          Sugerir serviço
        </Link>
      </header>

      <SearchBar
        query={query}
        onQueryChange={(value) => patchParams({ q: value })}
        location={location}
        onLocationChange={(value) => patchParams({ local: value })}
        onSubmit={() => patchParams({})}
        className="mb-6"
      />

      <section className="mb-6 rounded-2xl border border-velaris-100 bg-white p-4 shadow-sm">
        <p className="mb-3 text-sm font-semibold text-velaris-950">Categorias</p>
        <CategoryFilter
          categories={serviceCategories}
          selectedCategory={categoria}
          onChange={(value) => patchParams({ categoria: value })}
        />
      </section>

      <div className="mb-8 grid gap-3 sm:grid-cols-2">
        <label className="text-sm font-medium text-velaris-900">
          Bairro
          <select
            value={bairro}
            onChange={(event) => patchParams({ bairro: event.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Todos</option>
            {bairros.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-velaris-900">
          Categoria
          <select
            value={categoria}
            onChange={(event) => patchParams({ categoria: event.target.value })}
            className="mt-1 w-full rounded-xl border border-velaris-200 bg-white px-3 py-2.5 outline-none focus:ring-2 focus:ring-velaris-400"
          >
            <option value="">Todas</option>
            {serviceCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-slate-500">{filtered.length} resultado(s)</p>

      <div className="flex flex-col gap-5">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} variant="list" />
        ))}

        {filtered.length === 0 && (
          <p className="rounded-2xl border border-dashed border-velaris-200 bg-white py-12 text-center text-slate-600">
            Nenhum serviço encontrado com esses filtros.
          </p>
        )}
      </div>
    </div>
  )
}
