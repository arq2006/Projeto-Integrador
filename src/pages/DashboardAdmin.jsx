import { Link } from 'react-router-dom'
import { StatsCard } from '../components/StatsCard'
import {
  getCategoryCounts,
  mockAdminTodayAppointments,
  mockStats,
  mockSuggestions,
} from '../data'
import { PATHS } from '../routes/paths'

export function DashboardAdmin() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
  const categoryCounts = getCategoryCounts()

  return (
    <div className="p-4 sm:p-8">
      <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
            Área administrativa conceitual
          </p>
          <h1 className="mt-1 text-2xl font-bold text-velaris-950">DashboardAdmin</h1>
          <p className="text-sm capitalize text-slate-600">{today}</p>
        </div>
        <Link
          to={PATHS.services}
          className="text-sm font-semibold text-velaris-700 hover:underline"
        >
          Ver vitrine pública
        </Link>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          label="Serviços cadastrados"
          value={mockStats.totalServices}
          helper="Total em dados mockados."
          icon="📋"
        />
        <StatsCard
          label="Sugestões recebidas"
          value={mockStats.suggestionsReceived}
          helper="Fila para revisão manual."
          icon="💬"
        />
        <StatsCard
          label="Agendamentos simulados"
          value={mockStats.simulatedAppointments}
          helper="Usuário e painel admin."
          icon="📅"
        />
        <StatsCard
          label="Bairros ativos"
          value={mockStats.activeNeighborhoods}
          helper="Cobertura comunitária."
          icon="📍"
        />
      </section>

      <section className="mt-8 rounded-3xl border border-velaris-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-velaris-950">Total por categoria</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {categoryCounts.map((category) => (
            <div key={category.id} className="rounded-2xl bg-velaris-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-velaris-950">{category.label}</span>
                <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-velaris-800 ring-1 ring-velaris-100">
                  {category.total}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-velaris-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-velaris-950">Sugestões recebidas</h2>
          <div className="mt-4 space-y-3">
            {mockSuggestions.map((suggestion) => (
              <article
                key={suggestion.id}
                className="rounded-2xl border border-velaris-100 bg-velaris-50/50 p-4"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="font-semibold text-velaris-950">
                      {suggestion.establishmentName}
                    </p>
                    <p className="text-sm text-slate-600">
                      {suggestion.category} - {suggestion.neighborhood}
                    </p>
                    <p className="text-sm text-slate-500">{suggestion.address}</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Sugerido por {suggestion.suggestedBy} | {suggestion.phone}
                    </p>
                  </div>
                  <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-semibold text-velaris-800 ring-1 ring-velaris-100">
                    {suggestion.status}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-velaris-200 bg-white px-3 py-2 text-xs font-semibold text-velaris-800 hover:bg-velaris-50"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                  >
                    Remover
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-velaris-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-velaris-950">Cards de agendamentos</h2>
          <div className="mt-4 space-y-3">
            {mockAdminTodayAppointments.map((appointment) => (
              <article
                key={appointment.id}
                className="rounded-2xl border border-velaris-100 bg-white p-4 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-velaris-950">
                      {appointment.time} - {appointment.service}
                    </p>
                    <p className="text-sm text-slate-600">
                      {appointment.petName} | Tutor: {appointment.ownerName}
                    </p>
                  </div>
                  <StatusBadge status={appointment.status} />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="rounded-xl border border-velaris-200 bg-white px-3 py-2 text-xs font-semibold text-velaris-800 hover:bg-velaris-50"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-semibold text-rose-700 hover:bg-rose-50"
                  >
                    Remover
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function StatusBadge({ status }) {
  const confirmed = status === 'confirmado'
  return (
    <span
      className={
        confirmed
          ? 'rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200'
          : 'rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200'
      }
    >
      {confirmed ? 'Confirmado' : 'Pendente'}
    </span>
  )
}
