import { Link } from 'react-router-dom'
import { PATHS } from '../routes/paths'

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
            <p className="mt-3 text-xs text-slate-500">
              MVP front-end para o Projeto Integrador 2026/1.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-velaris-900">Explorar</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link to={PATHS.services} className="hover:text-velaris-700">
                  Serviços pet
                </Link>
              </li>
              <li>
                <Link to={PATHS.suggestService} className="hover:text-velaris-700">
                  Sugerir serviço
                </Link>
              </li>
              <li>
                <Link to={PATHS.projectInfo} className="hover:text-velaris-700">
                  Projeto Integrador
                </Link>
              </li>
              <li>
                <Link to={PATHS.adminDashboard} className="hover:text-velaris-700">
                  DashboardAdmin
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-velaris-900">Contato (demo)</p>
            <p className="mt-3 text-sm text-slate-600">contato@velarispetcare.com.br</p>
            <p className="text-sm text-slate-600">Goiânia - GO</p>
          </div>
        </div>
        <p className="mt-10 border-t border-velaris-100 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Velaris PetCare. Projeto front-end com dados mockados.
        </p>
      </div>
    </footer>
  )
}
