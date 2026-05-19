import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

/**
 * Faixa horizontal de categorias — leva à lista com filtro via query (?categoria=).
 */
export function CategoryButtons({ categories }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((cat) => (
        <Link
          key={cat.id}
          to={`${PATHS.petShops}?categoria=${cat.id}`}
          className="group flex min-w-[5.5rem] flex-col items-center gap-2 rounded-2xl border border-transparent p-2 transition hover:border-velaris-200 hover:bg-white"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-md ${cat.color}`}
          >
            {cat.emoji}
          </span>
          <span className="text-center text-xs font-semibold text-velaris-900 group-hover:text-velaris-700">
            {cat.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
