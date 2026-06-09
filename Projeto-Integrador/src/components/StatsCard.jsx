export function StatsCard({ label, value, helper, icon }) {
  return (
    <article className="rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>
          <p className="mt-2 text-3xl font-bold text-velaris-950">{value}</p>
        </div>
        {icon && (
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-velaris-100 text-xl text-velaris-800">
            {icon}
          </span>
        )}
      </div>
      {helper && <p className="mt-3 text-sm text-slate-600">{helper}</p>}
    </article>
  )
}
