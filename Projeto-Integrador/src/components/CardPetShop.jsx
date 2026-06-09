import { Link } from 'react-router-dom'
import { RatingStars } from './RatingStars'
import { PATHS } from '../routes/paths'

/**
 * Card reutilizavel de servico pet, usado na Home e na listagem.
 */
export function CardPetShop({ shop, variant = 'list' }) {
  const isFeatured = variant === 'featured'

  return (
    <article
      className={[
        'overflow-hidden rounded-2xl border border-velaris-100 bg-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-lg',
        isFeatured ? 'flex w-[min(100%,340px)] shrink-0 flex-col' : 'flex flex-col sm:flex-row',
      ].join(' ')}
    >
      <div className={isFeatured ? 'relative h-44' : 'relative h-48 shrink-0 sm:h-auto sm:w-56'}>
        <img src={shop.imageUrl} alt="" className="h-full w-full object-cover" loading="lazy" />
        {shop.verified && (
          <span className="absolute right-2 top-2 rounded-full bg-sky-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
            Verificado
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div>
          <h3 className="text-lg font-semibold text-velaris-950">{shop.name}</h3>
          <RatingStars value={shop.rating} count={shop.reviewCount} size="sm" />
        </div>

        <p className="text-sm text-slate-600">
          <span aria-hidden>📍</span> {shop.neighborhood}, {shop.city}
        </p>

        <dl className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Categoria
            </dt>
            <dd className="font-medium text-velaris-900">{shop.category}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Horário
            </dt>
            <dd>{shop.hoursSummary}</dd>
          </div>
        </dl>

        <p className="text-sm text-slate-600">{shop.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {shop.services.slice(0, isFeatured ? 3 : 5).map((service) => (
            <span
              key={service}
              className="rounded-full bg-velaris-50 px-2.5 py-0.5 text-xs font-medium text-velaris-800 ring-1 ring-velaris-100"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <Link
            to={PATHS.serviceDetails(shop.id)}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-velaris-200 px-4 py-2 text-center text-sm font-semibold text-velaris-800 transition hover:border-velaris-400 hover:bg-velaris-50 sm:flex-none"
          >
            Ver detalhes
          </Link>
          <Link
            to={PATHS.appointment(shop.id)}
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-velaris-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md shadow-velaris-600/20 transition hover:bg-velaris-700 sm:flex-none"
          >
            Agendar
          </Link>
        </div>
      </div>
    </article>
  )
}
