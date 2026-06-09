/**
 * Card de agendamento na área do usuário.
 */
export function AppointmentCard({ appointment }) {
  const statusStyles = {
    confirmado: 'bg-emerald-50 text-emerald-800 ring-emerald-200',
    pendente: 'bg-amber-50 text-amber-900 ring-amber-200',
    cancelado: 'bg-slate-100 text-slate-600 ring-slate-200',
  }
  const st = statusStyles[appointment.status] ?? statusStyles.pendente

  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-velaris-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold text-velaris-950">{appointment.petShopName}</p>
        <p className="text-sm text-slate-600">{appointment.service}</p>
        <p className="mt-1 text-sm text-slate-500">
          {appointment.petName} ·{' '}
          {new Date(appointment.date + 'T12:00:00').toLocaleDateString('pt-BR', {
            weekday: 'short',
            day: '2-digit',
            month: 'short',
          })}{' '}
          às {appointment.time}
        </p>
      </div>
      <span className={`self-start rounded-full px-3 py-1 text-xs font-semibold ring-1 sm:self-center ${st}`}>
        {appointment.status === 'confirmado'
          ? 'Confirmado'
          : appointment.status === 'pendente'
            ? 'Pendente'
            : 'Cancelado'}
      </span>
    </article>
  )
}
