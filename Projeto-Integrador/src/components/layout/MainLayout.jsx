import { Outlet } from 'react-router-dom'
import { Navbar } from '../Navbar'
import { Footer } from '../Footer'

/**
 * Layout público: navegação superior + rodapé em todas as páginas do grupo.
 */
export function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-velaris-50">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
