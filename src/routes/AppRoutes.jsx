import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout'
import { AdminLayout } from '../components/layout/AdminLayout'
import { PATHS } from './paths'

import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { Cadastro } from '../pages/Cadastro'
import { Petshops } from '../pages/Petshops'
import { PerfilPetshop } from '../pages/PerfilPetshop'
import { Agendamento } from '../pages/Agendamento'
import { PerfilUsuario } from '../pages/PerfilUsuario'
import { DashboardAdmin } from '../pages/DashboardAdmin'
import { AdminPlaceholder } from '../pages/AdminPlaceholder'

/** Remonta o fluxo de agendamento quando ?petshopId= mudar, mantendo estado coerente com a URL */
function AgendamentoRoute() {
  const [params] = useSearchParams()
  const remountKey = params.get('petshopId') ?? '_default'
  return <Agendamento key={remountKey} />
}

/**
 * Mapa central de rotas públicas e área administrativa (mock).
 */
export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.cadastro} element={<Cadastro />} />
        <Route path={PATHS.petShops} element={<Petshops />} />
        <Route path="/pet-shops/:id" element={<PerfilPetshop />} />
        <Route path={PATHS.agendamento} element={<AgendamentoRoute />} />
        <Route path={PATHS.perfilUsuario} element={<PerfilUsuario />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="agendamentos" element={<AdminPlaceholder title="Agendamentos" />} />
        <Route path="servicos" element={<AdminPlaceholder title="Serviços" />} />
        <Route path="pets" element={<AdminPlaceholder title="Pets atendidos" />} />
        <Route path="avaliacoes" element={<AdminPlaceholder title="Avaliações" />} />
        <Route path="galeria" element={<AdminPlaceholder title="Galeria" />} />
        <Route
          path="configuracoes"
          element={<AdminPlaceholder title="Configurações" />}
        />
      </Route>

      <Route path="*" element={<Navigate to={PATHS.home} replace />} />
    </Routes>
  )
}
