/**
 * Exibe até 5 estrelas com preenchimento proporcional à nota (0–5).
 */
export function RatingStars({ value, count, size = 'md', showValue = true }) {
  const starSize = size === 'sm' ? 'text-sm' : 'text-base'
  const cells = [1, 2, 3, 4, 5].map((i) => {
    const diff = value - (i - 1)
    let fill = 0
    if (diff >= 1) fill = 1
    else if (diff > 0) fill = Math.min(1, diff)
    return { i, fill }
  })

  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className={`flex gap-0.5 text-amber-400 ${starSize}`} aria-hidden>
        {cells.map(({ i, fill }) => (
          <span key={i} className="relative inline-block h-[1em] w-[1ch] overflow-hidden">
            <span className="text-slate-200">★</span>
            <span
              className="absolute left-0 top-0 overflow-hidden text-amber-400"
              style={{ width: `${fill * 100}%` }}
            >
              ★
            </span>
          </span>
        ))}
      </span>
      {showValue && (
        <span className="text-sm font-semibold text-velaris-900">
          {value.toFixed(1)}
          {count != null && (
            <span className="ml-1 font-normal text-slate-500">({count} avaliações)</span>
          )}
        </span>
      )}
    </div>
  )
}
