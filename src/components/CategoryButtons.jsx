import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

/**
 * Faixa horizontal de categorias que abre a listagem ja filtrada.
 */
export function CategoryButtons({ categories }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`${PATHS.services}?categoria=${category.id}`}
          className="group flex min-w-[7rem] flex-col items-center gap-2 rounded-2xl border border-transparent p-2 transition hover:border-velaris-200 hover:bg-white"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl text-white shadow-md ${category.color}`}
          >
            {category.emoji}
          </span>
          <span className="text-center text-xs font-semibold text-velaris-900 group-hover:text-velaris-700">
            {category.label}
          </span>
        </Link>
      ))}
    </div>
  )
}
