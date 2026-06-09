import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PATHS } from '../routes/paths'

const navClass = ({ isActive }) =>
  [
    'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive
      ? 'bg-velaris-100 text-velaris-900'
      : 'text-slate-600 hover:bg-velaris-50 hover:text-velaris-900',
  ].join(' ')

export function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { to: PATHS.home, label: 'Início' },
    { to: PATHS.services, label: 'Serviços' },
    { to: PATHS.suggestService, label: 'Sugerir serviço' },
    { to: PATHS.projectInfo, label: 'Projeto Integrador' },
    { to: PATHS.adminDashboard, label: 'Admin' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-velaris-100/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to={PATHS.home}
          className="flex shrink-0 items-center gap-2 text-velaris-900"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-velaris-600 text-lg text-white shadow-md"
            aria-hidden
          >
            🐾
          </span>
          <span className="text-lg font-semibold tracking-tight">Velaris PetCare</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === PATHS.home} className={navClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            to={PATHS.login}
            className="rounded-xl border border-velaris-200 px-4 py-2 text-sm font-semibold text-velaris-800 transition hover:border-velaris-400 hover:bg-velaris-50"
          >
            Entrar
          </Link>
          <Link
            to={PATHS.cadastro}
            className="rounded-xl bg-velaris-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-velaris-600/25 transition hover:bg-velaris-700"
          >
            Cadastrar
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex rounded-lg border border-velaris-200 p-2 text-velaris-800 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Abrir menu</span>
          {open ? '×' : '☰'}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-velaris-100 bg-white px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === PATHS.home}
                className={navClass}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2">
            <Link
              to={PATHS.login}
              className="rounded-xl border border-velaris-200 py-2 text-center text-sm font-semibold text-velaris-800"
              onClick={() => setOpen(false)}
            >
              Entrar
            </Link>
            <Link
              to={PATHS.cadastro}
              className="rounded-xl bg-velaris-600 py-2 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Cadastrar
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
