import { Link, useParams } from 'react-router-dom'
import { RatingStars } from '../components/RatingStars'
import { getPetShopById, getReviewsForShop } from '../data'
import { PATHS } from '../routes/paths'

/**
 * Perfil público do pet shop — galeria, serviços, horários e avaliações mockadas.
 */
export function PerfilPetshop() {
  const { id } = useParams()
  const shop = getPetShopById(id)
  const reviews = getReviewsForShop(id)

  if (!shop) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-velaris-950">Pet shop não encontrado</h1>
        <Link to={PATHS.petShops} className="mt-4 inline-block font-semibold text-velaris-700">
          ← Voltar à lista
        </Link>
      </div>
    )
  }

  return (
    <div className="pb-24">
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <img src={shop.coverUrl} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-velaris-950/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 relative rounded-3xl border border-velaris-100 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="flex flex-wrap items-center gap-2 text-3xl font-bold text-velaris-950">
                {shop.name}
                {shop.verified && (
                  <span className="text-sky-500" title="Estabelecimento verificado">
                    ✓
                  </span>
                )}
              </h1>
              <div className="mt-2">
                <RatingStars value={shop.rating} count={shop.reviewCount} />
              </div>
              <p className="mt-3 text-sm text-slate-600">📍 {shop.address}</p>
              <p className="text-sm text-slate-600">📞 {shop.phone}</p>
            </div>
            <Link
              to={`${PATHS.agendamento}?petshopId=${shop.id}`}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-velaris-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-velaris-700"
            >
              Agendar horário
            </Link>
          </div>

          <div className="mt-6 rounded-2xl bg-velaris-50/80 p-4 ring-1 ring-velaris-100">
            <p className="text-sm font-semibold text-velaris-900">Horário de funcionamento</p>
            <p className="mt-1 text-sm text-slate-700">{shop.hours.weekdays}</p>
            <p className="text-sm text-slate-700">{shop.hours.saturday}</p>
            <p className="text-sm text-slate-700">{shop.hours.sunday}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-velaris-950">Serviços</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {shop.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white px-3 py-1 text-sm font-medium text-velaris-800 ring-1 ring-velaris-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-velaris-950">Sobre</h2>
            <p className="mt-2 text-slate-600">{shop.about}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-bold text-velaris-950">Galeria</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {shop.gallery.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt=""
                  className="h-32 w-full rounded-xl object-cover ring-1 ring-velaris-100"
                />
              ))}
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-velaris-950">Avaliações</h2>
            <ul className="mt-4 space-y-4">
              {reviews.map((r) => (
                <li
                  key={r.id}
                  className="rounded-2xl border border-velaris-100 bg-velaris-50/40 p-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={r.authorAvatar}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-velaris-950">{r.authorName}</p>
                        <RatingStars value={r.rating} showValue={false} size="sm" />
                        <span className="text-xs text-slate-500">
                          {new Date(r.date + 'T12:00:00').toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-700">{r.text}</p>
                    </div>
                  </div>
                </li>
              ))}
              {reviews.length === 0 && (
                <li className="text-sm text-slate-500">Ainda não há avaliações para este perfil.</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-velaris-100 bg-white/95 p-4 backdrop-blur lg:hidden">
        <Link
          to={`${PATHS.agendamento}?petshopId=${shop.id}`}
          className="block w-full rounded-2xl bg-velaris-600 py-3 text-center font-semibold text-white"
        >
          Agendar horário
        </Link>
      </div>
    </div>
  )
}
