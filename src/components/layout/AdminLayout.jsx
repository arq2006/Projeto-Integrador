import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import { PATHS } from '../../routes/paths'
import { SidebarAdmin, AdminSidebarNav } from '../SidebarAdmin'

/**
 * Layout do painel do pet shop — sidebar desktop + drawer em telas pequenas.
 */
export function AdminLayout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-dvh bg-slate-100">
      <SidebarAdmin />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-velaris-200 bg-white px-4 py-3 lg:hidden">
          <Link to={PATHS.home} className="text-sm font-semibold text-velaris-800">
            ← Site
          </Link>
          <button
            type="button"
            className="rounded-xl border border-velaris-200 px-3 py-2 text-sm font-semibold text-velaris-800"
            onClick={() => setOpen(true)}
            aria-expanded={open}
          >
            Menu ☰
          </button>
        </header>

        {open && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-black/50"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            />
            <aside className="absolute right-0 top-0 flex h-full w-72 flex-col bg-velaris-900 text-white shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                <span className="font-semibold">Painel</span>
                <button type="button" className="text-xl leading-none" onClick={() => setOpen(false)}>
                  ✕
                </button>
              </div>
              <AdminSidebarNav onNavigate={() => setOpen(false)} />
            </aside>
          </div>
        )}

        <Outlet />
      </div>
    </div>
  )
}
