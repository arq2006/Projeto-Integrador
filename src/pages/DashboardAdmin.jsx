import { Link } from 'react-router-dom'
import { mockAdminTodayAppointments } from '../data'
import { PATHS } from '../routes/paths'

/**
 * Painel principal do pet shop — resumo do dia e atalhos.
 */
export function DashboardAdmin() {
  const today = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  return (
    <div className="p-4 sm:p-8">
      <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-velaris-950">Dashboard</h1>
          <p className="text-sm capitalize text-slate-600">{today}</p>
        </div>
        <Link
          to={PATHS.petShops}
          className="text-sm font-semibold text-velaris-700 hover:underline"
        >
          Ver vitrine pública
        </Link>
      </header>

      <section className="rounded-3xl border border-velaris-100 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-semibold text-velaris-950">Agendamentos de hoje</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-velaris-100 text-slate-500">
                <th className="py-2 pr-4 font-medium">Horário</th>
                <th className="py-2 pr-4 font-medium">Serviço</th>
                <th className="py-2 pr-4 font-medium">Pet</th>
                <th className="py-2 pr-4 font-medium">Tutor</th>
                <th className="py-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockAdminTodayAppointments.map((row) => (
                <tr key={row.id} className="border-b border-velaris-50 last:border-0">
                  <td className="py-3 pr-4 font-medium text-velaris-900">{row.time}</td>
                  <td className="py-3 pr-4 text-slate-700">{row.service}</td>
                  <td className="py-3 pr-4 text-slate-700">{row.petName}</td>
                  <td className="py-3 pr-4 text-slate-700">{row.ownerName}</td>
                  <td className="py-3">
                    <span
                      className={
                        row.status === 'confirmado'
                          ? 'rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200'
                          : 'rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200'
                      }
                    >
                      {row.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { to: PATHS.adminServicos, icon: '🧴', t: 'Gerenciar serviços', d: 'Preços, duração e disponibilidade' },
          { to: PATHS.adminGaleria, icon: '🖼️', t: 'Galeria', d: 'Fotos do espaço e da equipe' },
          { to: PATHS.adminAvaliacoes, icon: '⭐', t: 'Avaliações', d: 'Responder feedback dos tutores' },
        ].map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-2xl">{card.icon}</span>
            <p className="mt-3 font-semibold text-velaris-950">{card.t}</p>
            <p className="mt-1 text-sm text-slate-600">{card.d}</p>
          </Link>
        ))}
      </section>
    </div>
  )
}
