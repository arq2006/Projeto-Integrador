const sliceColors = ['#7c3aed', '#38bdf8', '#10b981', '#f59e0b', '#ec4899', '#14b8a6']

function polarToCartesian(center, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180

  return {
    x: center + radius * Math.cos(angleInRadians),
    y: center + radius * Math.sin(angleInRadians),
  }
}

function describeSlice(startAngle, endAngle) {
  const center = 100
  const radius = 82
  const start = polarToCartesian(center, radius, endAngle)
  const end = polarToCartesian(center, radius, startAngle)
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  return [
    `M ${center} ${center}`,
    `L ${start.x} ${start.y}`,
    `A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`,
    'Z',
  ].join(' ')
}

export function CategoryPieChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.total, 0)

  function formatPercentage(value) {
    return value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  const slices = data.map((item, index) => {
    const previousTotal = data
      .slice(0, index)
      .reduce((sum, category) => sum + category.total, 0)
    const percentage = total > 0 ? (item.total / total) * 100 : 0
    const startAngle = total > 0 ? (previousTotal / total) * 360 : 0
    const endAngle = total > 0 ? ((previousTotal + item.total) / total) * 360 : 0

    return {
      ...item,
      percentage,
      color: sliceColors[index % sliceColors.length],
      path: describeSlice(startAngle, endAngle),
    }
  })

  return (
    <div className="grid gap-6 rounded-2xl border border-velaris-100 bg-white p-5 shadow-sm lg:grid-cols-[260px_1fr] lg:items-center">
      <div className="mx-auto w-full max-w-[260px]">
        <svg
          viewBox="0 0 200 200"
          role="img"
          aria-label="Gráfico de pizza com distribuição dos serviços por categoria"
          className="h-auto w-full"
        >
          {slices.map((slice) => (
            <path
              key={slice.id}
              d={slice.path}
              fill={slice.color}
              stroke="#ffffff"
              strokeWidth="3"
            />
          ))}
          <circle cx="100" cy="100" r="42" fill="#ffffff" />
          <text
            x="100"
            y="96"
            textAnchor="middle"
            className="fill-velaris-950 text-[18px] font-bold"
          >
            {total}
          </text>
          <text x="100" y="116" textAnchor="middle" className="fill-slate-500 text-[10px]">
            serviços
          </text>
        </svg>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-velaris-950">
          Distribuição por categoria
        </h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {slices.map((slice) => (
            <li key={slice.id} className="flex items-start gap-3 rounded-xl bg-velaris-50 p-3">
              <span
                className="mt-1 h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: slice.color }}
                aria-hidden
              />
              <span className="text-sm text-slate-700">
                <strong className="block text-velaris-950">{slice.label}</strong>
                {slice.total} {slice.total === 1 ? 'serviço' : 'serviços'} ·{' '}
                {formatPercentage(slice.percentage)}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
