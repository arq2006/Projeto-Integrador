import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
import { AdminLayout } from '../components/layout/AdminLayout'
import { MainLayout } from '../components/layout/MainLayout'
import { PATHS } from './paths'

import { AdminPlaceholder } from '../pages/AdminPlaceholder'
import { Appointment } from '../pages/Appointment'
import { Cadastro } from '../pages/Cadastro'
import { DashboardAdmin } from '../pages/DashboardAdmin'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'
import { PerfilUsuario } from '../pages/PerfilUsuario'
import { ProjectInfo } from '../pages/ProjectInfo'
import { ServiceDetails } from '../pages/ServiceDetails'
import { Services } from '../pages/Services'
import { SuggestService } from '../pages/SuggestService'

function AppointmentRoute() {
  const [params] = useSearchParams()
  const remountKey = params.get('petshopId') ?? '_default'
  return <Appointment key={remountKey} />
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATHS.home} element={<Home />} />
        <Route path={PATHS.login} element={<Login />} />
        <Route path={PATHS.cadastro} element={<Cadastro />} />
        <Route path={PATHS.services} element={<Services />} />
        <Route path={PATHS.serviceDetails()} element={<ServiceDetails />} />
        <Route path={PATHS.suggestService} element={<SuggestService />} />
        <Route path={PATHS.projectInfo} element={<ProjectInfo />} />
        <Route path={PATHS.appointment()} element={<Appointment />} />
        <Route path={PATHS.agendamento} element={<AppointmentRoute />} />
        <Route path={PATHS.perfilUsuario} element={<PerfilUsuario />} />

        <Route path="/pet-shops" element={<Services />} />
        <Route path="/pet-shops/:id" element={<ServiceDetails />} />
        <Route path="/agendar" element={<AppointmentRoute />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<DashboardAdmin />} />
        <Route path="agendamentos" element={<AdminPlaceholder title="Agendamentos" />} />
        <Route path="servicos" element={<AdminPlaceholder title="Serviços" />} />
        <Route path="pets" element={<AdminPlaceholder title="Pets atendidos" />} />
        <Route path="avaliacoes" element={<AdminPlaceholder title="Avaliações" />} />
        <Route path="galeria" element={<AdminPlaceholder title="Galeria" />} />
        <Route path="configuracoes" element={<AdminPlaceholder title="Configurações" />} />
      </Route>

      <Route path="*" element={<Navigate to={PATHS.home} replace />} />
    </Routes>
  )
}
