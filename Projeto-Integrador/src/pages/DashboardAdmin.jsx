import { Link } from 'react-router-dom'
import {
  getCategoryCounts,
  mockAdminTodayAppointments,
  mockStats,
  mockSuggestions,
} from '../data'
import { PATHS } from '../routes/paths'

export function DashboardAdmin() {
  const categoryCounts = getCategoryCounts()

  return (
    <div className="p-4 sm:p-8">
      <header className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-velaris-600">
            Protótipo administrativo
          </p>
          <h1 className="mt-1 text-2xl font-bold text-velaris-950">Dashboard Admin</h1>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">
            Esta tela é apenas demonstrativa. Os botões não alteram dados porque o projeto ainda
            não tem backend.
          </p>
        </div>
        <Link
          to={PATHS.services}
          className="text-sm font-semibold text-velaris-700 hover:underline"
        >
          Ver serviços
        </Link>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <SmallCard label="Serviços cadastrados" value={mockStats.totalServices} />
        <SmallCard label="Sugestões recebidas" value={mockStats.suggestionsReceived} />
        <SmallCard label="Agendamentos simulados" value={mockStats.simulatedAppointments} />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <Panel title="Total por categoria">
          <ul className="space-y-3">
            {categoryCounts.map((category) => (
              <li
                key={category.id}
                className="flex items-center justify-between rounded-xl bg-velaris-50 px-4 py-3 text-sm"
              >
                <span className="font-medium text-slate-700">{category.label}</span>
                <span className="font-bold text-velaris-900">{category.total}</span>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Agendamentos">
          <div className="space-y-3">
            {mockAdminTodayAppointments.map((appointment) => (
              <article
                key={appointment.id}
                className="rounded-xl border border-velaris-100 bg-white p-4"
              >
                <p className="font-semibold text-velaris-950">
                  {appointment.time} - {appointment.service}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {appointment.petName} | Tutor: {appointment.ownerName}
                </p>
                <div className="mt-3 flex gap-2">
                  <FakeButton>Editar</FakeButton>
                  <FakeButton danger>Remover</FakeButton>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </section>

      <section className="mt-8">
        <Panel title="Sugestões recebidas">
          <div className="grid gap-3 md:grid-cols-3">
            {mockSuggestions.map((suggestion) => (
              <article
                key={suggestion.id}
                className="rounded-xl border border-velaris-100 bg-velaris-50/60 p-4"
              >
                <p className="font-semibold text-velaris-950">{suggestion.establishmentName}</p>
                <p className="mt-1 text-sm text-slate-600">
                  {suggestion.category} - {suggestion.neighborhood}
                </p>
                <p className="mt-1 text-xs text-slate-500">Sugerido por {suggestion.suggestedBy}</p>
                <div className="mt-3 flex gap-2">
                  <FakeButton>Editar</FakeButton>
                  <FakeButton danger>Remover</FakeButton>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </section>
    </div>
  )
}

function SmallCard({ label, value }) {
  return (
    <article className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-velaris-950">{value}</p>
    </article>
  )
}

function Panel({ title, children }) {
  return (
    <section className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold text-velaris-950">{title}</h2>
      {children}
    </section>
  )
}

function FakeButton({ children, danger = false }) {
  return (
    <button
      type="button"
      className={
        danger
          ? 'rounded-lg border border-rose-200 px-3 py-1.5 text-xs font-semibold text-rose-700'
          : 'rounded-lg border border-velaris-200 px-3 py-1.5 text-xs font-semibold text-velaris-800'
      }
    >
      {children}
    </button>
  )
}
