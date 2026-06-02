/**
 * Barra de busca controlada pelo componente pai.
 */
export function SearchBar({
  query,
  onQueryChange,
  location,
  onLocationChange,
  onSubmit,
  className = '',
}) {
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit?.()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={[
        'flex flex-col gap-3 rounded-2xl border border-velaris-100 bg-white p-3 shadow-[var(--shadow-soft)] sm:flex-row sm:items-stretch',
        className,
      ].join(' ')}
    >
      <label className="flex flex-1 items-center gap-2 rounded-xl bg-velaris-50/80 px-3 py-2 ring-1 ring-velaris-100">
        <span className="text-lg" aria-hidden>
          🔎
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Nome, serviço, categoria ou palavra-chave"
          className="min-w-0 flex-1 bg-transparent text-sm text-velaris-950 outline-none placeholder:text-slate-400"
        />
      </label>
      <label className="flex flex-1 items-center gap-2 rounded-xl bg-velaris-50/80 px-3 py-2 ring-1 ring-velaris-100">
        <span className="text-lg" aria-hidden>
          📍
        </span>
        <input
          type="text"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          placeholder="Bairro ou cidade"
          className="min-w-0 flex-1 bg-transparent text-sm text-velaris-950 outline-none placeholder:text-slate-400"
        />
      </label>
      <button
        type="submit"
        className="rounded-xl bg-velaris-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-velaris-700 sm:self-stretch"
      >
        Buscar
      </button>
    </form>
  )
}
