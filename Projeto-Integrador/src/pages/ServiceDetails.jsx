import { Link, useParams } from 'react-router-dom'
import { RatingStars } from '../components/RatingStars'
import { getReviewsForShop, getServiceById } from '../data'
import { PATHS } from '../routes/paths'

export function ServiceDetails() {
  const { id } = useParams()
  const service = getServiceById(id)
  const reviews = getReviewsForShop(id)

  if (!service) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-velaris-950">Serviço não encontrado</h1>
        <Link to={PATHS.services} className="mt-4 inline-block font-semibold text-velaris-700">
          Voltar aos serviços
        </Link>
      </div>
    )
  }

  return (
    <div className="pb-24">
      <div className="relative h-56 w-full overflow-hidden sm:h-72">
        <img src={service.coverUrl} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-velaris-950/80 to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-16 relative rounded-3xl border border-velaris-100 bg-white p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-velaris-100 px-3 py-1 text-xs font-semibold text-velaris-800">
                  {service.category}
                </span>
                {service.verified && (
                  <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 ring-1 ring-sky-100">
                    Verificado
                  </span>
                )}
              </div>
              <h1 className="mt-3 text-3xl font-bold text-velaris-950">{service.name}</h1>
              <p className="mt-2 max-w-2xl text-slate-600">{service.description}</p>
              <div className="mt-3">
                <RatingStars value={service.rating} count={service.reviewCount} />
              </div>
            </div>
            <Link
              to={PATHS.appointment(service.id)}
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-velaris-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-velaris-700"
            >
              Agendar serviço
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <InfoBox title="Endereço" value={service.address} />
            <InfoBox title="Contato" value={`${service.phone} | WhatsApp ${service.whatsapp}`} />
            <InfoBox title="Horário" value={service.hoursSummary} />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <section>
              <h2 className="text-lg font-bold text-velaris-950">Serviços oferecidos</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.services.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-velaris-50 px-3 py-1 text-sm font-medium text-velaris-800 ring-1 ring-velaris-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h2 className="mt-8 text-lg font-bold text-velaris-950">Descrição</h2>
              <p className="mt-2 text-slate-600">{service.about}</p>
            </section>

            <section className="rounded-2xl border border-velaris-100 bg-velaris-50/60 p-5">
              <h2 className="text-lg font-bold text-velaris-950">
                Informações de cuidados especiais
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">{service.specialCare}</p>
              <div className="mt-5 rounded-xl bg-white p-4 text-sm text-slate-600 ring-1 ring-velaris-100">
                <p className="font-semibold text-velaris-900">Funcionamento detalhado</p>
                <p className="mt-1">{service.hours.weekdays}</p>
                <p>{service.hours.saturday}</p>
                <p>{service.hours.sunday}</p>
              </div>
            </section>
          </div>

          <section className="mt-10">
            <h2 className="text-lg font-bold text-velaris-950">Galeria</h2>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {service.gallery.map((url, index) => (
                <img
                  key={url}
                  src={url}
                  alt={`Foto do estabelecimento ${index + 1}`}
                  className="h-32 w-full rounded-xl object-cover ring-1 ring-velaris-100"
                />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-lg font-bold text-velaris-950">Avaliações</h2>
            <ul className="mt-4 space-y-4">
              {reviews.map((review) => (
                <li
                  key={review.id}
                  className="rounded-2xl border border-velaris-100 bg-velaris-50/40 p-4"
                >
                  <div className="flex items-start gap-3">
                    <img
                      src={review.authorAvatar}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-velaris-950">{review.authorName}</p>
                        <RatingStars value={review.rating} showValue={false} size="sm" />
                        <span className="text-xs text-slate-500">
                          {new Date(`${review.date}T12:00:00`).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-700">{review.text}</p>
                    </div>
                  </div>
                </li>
              ))}
              {reviews.length === 0 && (
                <li className="text-sm text-slate-500">
                  Ainda não há avaliações para este serviço.
                </li>
              )}
            </ul>
          </section>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 border-t border-velaris-100 bg-white/95 p-4 backdrop-blur lg:hidden">
        <Link
          to={PATHS.appointment(service.id)}
          className="block w-full rounded-2xl bg-velaris-600 py-3 text-center font-semibold text-white"
        >
          Agendar serviço
        </Link>
      </div>
    </div>
  )
}

function InfoBox({ title, value }) {
  return (
    <div className="rounded-2xl border border-velaris-100 bg-velaris-50/60 p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{title}</p>
      <p className="mt-1 text-sm font-medium text-slate-700">{value}</p>
    </div>
  )
}
