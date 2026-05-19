/**
 * Resumo do perfil do usuário (avatar, nome, contatos) com ação de edição simulada.
 */
export function UserProfileCard({ user, onEditClick }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-velaris-100 bg-white p-6 text-center shadow-[var(--shadow-card)] sm:flex-row sm:text-left">
      <img
        src={user.avatarUrl}
        alt=""
        className="h-24 w-24 rounded-2xl object-cover ring-4 ring-velaris-100"
      />
      <div className="flex-1">
        <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-velaris-950">{user.fullName}</h2>
            <p className="text-sm text-slate-600">{user.email}</p>
            <p className="text-sm text-slate-600">{user.phone}</p>
          </div>
          <button
            type="button"
            onClick={onEditClick}
            className="rounded-xl border border-velaris-200 px-4 py-2 text-sm font-semibold text-velaris-800 transition hover:bg-velaris-50"
            title="Em produção, abriria modal ou página de edição"
          >
            ✏️ Editar
          </button>
        </div>
      </div>
    </div>
  )
}
