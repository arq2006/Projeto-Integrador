import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

/**
 * Rodapé institucional com CTA suave para descoberta de pet shops.
 */
export function Footer() {
  return (
    <footer className="border-t border-velaris-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-velaris-900">Velaris PetCare</p>
            <p className="mt-2 max-w-sm text-sm text-slate-600">
              Conectando cuidado e confiança para seu pet.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-velaris-900">Explorar</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to={PATHS.petShops} className="hover:text-velaris-700">
                  Lista de Pet Shops
                </Link>
              </li>
              <li>
                <Link to={PATHS.agendamento} className="hover:text-velaris-700">
                  Agendar serviço
                </Link>
              </li>
              <li>
                <Link to={PATHS.perfilUsuario} className="hover:text-velaris-700">
                  Meu perfil
                </Link>
              </li>
              <li>
                <Link to={PATHS.adminDashboard} className="hover:text-velaris-700">
                  Painel do pet shop
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-velaris-900">Contato (demo)</p>
            <p className="mt-3 text-sm text-slate-600">contato@velarispetcare.com.br</p>
            <p className="text-sm text-slate-600">São Paulo — SP</p>
          </div>
        </div>
        <p className="mt-10 border-t border-velaris-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Velaris PetCare. Projeto front-end com dados mockados.
        </p>
      </div>
    </footer>
  )
}
