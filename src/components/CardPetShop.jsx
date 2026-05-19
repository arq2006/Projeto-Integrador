import { Link } from 'react-router-dom'
import { RatingStars } from './RatingStars'
import { PATHS } from '../routes/paths'

/**
 * Card reutilizável de pet shop — variantes para lista e destaque na Home.
 */
export function CardPetShop({ shop, variant = 'list' }) {
  const isFeatured = variant === 'featured'

  return (
    <article
      className={[
        'overflow-hidden rounded-2xl border border-velaris-100 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg',
        isFeatured ? 'flex w-[min(100%,320px)] shrink-0 flex-col' : 'flex flex-col sm:flex-row',
      ].join(' ')}
    >
      <div className={isFeatured ? 'relative h-44' : 'relative h-48 shrink-0 sm:h-auto sm:w-52'}>
        <img
          src={shop.imageUrl}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {shop.verified && (
          <span className="absolute right-2 top-2 rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Verificado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-velaris-950">{shop.name}</h3>
            <RatingStars value={shop.rating} count={shop.reviewCount} size="sm" />
          </div>
        </div>
        <p className="text-sm text-slate-600">
          📍 {shop.neighborhood}, {shop.city}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {shop.services.slice(0, 4).map((s) => (
            <span
              key={s}
              className="rounded-full bg-velaris-50 px-2.5 py-0.5 text-xs font-medium text-velaris-800 ring-1 ring-velaris-100"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Link
            to={PATHS.petShopProfile(shop.id)}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-velaris-200 px-4 py-2 text-center text-sm font-semibold text-velaris-800 transition hover:border-velaris-400 hover:bg-velaris-50 sm:flex-none"
          >
            {isFeatured ? 'Ver detalhes' : 'Ver perfil'}
          </Link>
          <Link
            to={`${PATHS.agendamento}?petshopId=${shop.id}`}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-velaris-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-velaris-600/20 transition hover:bg-velaris-700 sm:flex-none"
          >
            Agendar
          </Link>
        </div>
      </div>
    </article>
  )
}
