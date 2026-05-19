import { Link } from 'react-router-dom'
import { UserProfileCard } from '../components/UserProfileCard'
import { AppointmentCard } from '../components/AppointmentCard'
import { mockAppointments, mockCurrentUser, mockUserPets } from '../data'
import { PATHS } from '../routes/paths'

/**
 * Área do tutor — pets, próximos agendamentos e navegação mobile inferior (demo).
 */
export function PerfilUsuario() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8">
      <UserProfileCard
        user={mockCurrentUser}
        onEditClick={() => alert('Edição de perfil seria um PATCH /users/me na API.')}
      />

      <section className="mt-10">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-velaris-950">Meus pets</h2>
          <button
            type="button"
            className="rounded-xl bg-velaris-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-velaris-700"
            onClick={() => alert('Modal de novo pet — integração futura.')}
          >
            + Adicionar pet
          </button>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {mockUserPets.map((pet) => (
            <article
              key={pet.id}
              className="min-w-[200px] overflow-hidden rounded-2xl border border-velaris-100 bg-white shadow-sm"
            >
              <img src={pet.photoUrl} alt="" className="h-28 w-full object-cover" />
              <div className="p-3">
                <p className="font-semibold text-velaris-950">{pet.name}</p>
                <p className="text-xs text-slate-600">
                  {pet.species} · {pet.breed}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-bold text-velaris-950">Próximos agendamentos</h2>
        <div className="mt-4 flex flex-col gap-3">
          {mockAppointments.map((a) => (
            <AppointmentCard key={a.id} appointment={a} />
          ))}
        </div>
      </section>

      {/* Navegação inferior estilo app (visível em telas pequenas) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-velaris-100 bg-white/95 py-2 backdrop-blur-md sm:hidden"
        aria-label="Navegação principal"
      >
        <Link
          to={PATHS.home}
          className="flex flex-1 flex-col items-center gap-0.5 py-1 text-xs font-medium text-slate-600"
        >
          <span className="text-lg">🏠</span>
          Início
        </Link>
        <Link
          to={PATHS.petShops}
          className="flex flex-1 flex-col items-center gap-0.5 py-1 text-xs font-medium text-slate-600"
        >
          <span className="text-lg">🔎</span>
          Buscar
        </Link>
        <Link
          to={PATHS.agendamento}
          className="flex flex-1 flex-col items-center gap-0.5 py-1 text-xs font-medium text-slate-600"
        >
          <span className="text-lg">📅</span>
          Agendar
        </Link>
        <span className="flex flex-1 flex-col items-center gap-0.5 py-1 text-xs font-semibold text-velaris-700">
          <span className="text-lg">👤</span>
          Perfil
        </span>
      </nav>
    </div>
  )
}
