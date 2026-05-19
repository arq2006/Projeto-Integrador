import { NavLink } from 'react-router-dom'
import { PATHS } from '../routes/paths'

const linkBase =
  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors'

function itemClass({ isActive }) {
  return [
    linkBase,
    isActive ? 'bg-white/15 text-white' : 'text-velaris-100 hover:bg-white/10 hover:text-white',
  ].join(' ')
}

const items = [
  { to: PATHS.adminDashboard, label: 'Dashboard', icon: '📊' },
  { to: PATHS.adminAgendamentos, label: 'Agendamentos', icon: '📅' },
  { to: PATHS.adminServicos, label: 'Serviços', icon: '🧴' },
  { to: PATHS.adminPets, label: 'Pets', icon: '🐕' },
  { to: PATHS.adminAvaliacoes, label: 'Avaliações', icon: '⭐' },
  { to: PATHS.adminGaleria, label: 'Galeria', icon: '🖼️' },
  { to: PATHS.adminConfig, label: 'Configurações', icon: '⚙️' },
]

/**
 * Navegação lateral reutilizável (desktop + drawer mobile).
 */
export function AdminSidebarNav({ onNavigate }) {
  return (
    <>
      <div className="border-b border-white/10 px-5 py-6">
        <div className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-velaris-600 text-xl">
            🐾
          </span>
          <div>
            <p className="text-sm font-semibold">Velaris PetCare</p>
            <p className="text-xs text-velaris-200">Painel do pet shop</p>
          </div>
        </div>
      </div>
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Admin">
        {items.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === PATHS.adminDashboard}
            className={itemClass}
            onClick={onNavigate}
          >
            <span aria-hidden>{icon}</span>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="border-t border-white/10 p-3">
        <NavLink
          to={PATHS.home}
          className={`${linkBase} text-velaris-100 hover:bg-white/10 hover:text-white`}
          onClick={onNavigate}
        >
          <span aria-hidden>🚪</span>
          Sair (demo)
        </NavLink>
      </div>
    </>
  )
}

/**
 * Sidebar fixa em telas grandes — em mobile o layout admin usa drawer com o mesmo conteúdo.
 */
export function SidebarAdmin() {
  return (
    <aside className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col bg-velaris-900 text-white shadow-xl lg:flex lg:flex-col">
      <AdminSidebarNav />
    </aside>
  )
}
