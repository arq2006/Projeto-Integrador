/**
 * Constantes de rotas — use em Links e navigate() para evitar strings soltas.
 * Na integração com API, estes paths permanecem; apenas a origem dos dados muda.
 */
export const PATHS = {
  home: '/',
  login: '/login',
  cadastro: '/cadastro',
  services: '/servicos',
  serviceDetails: (id = ':id') => `/servicos/${id}`,
  petShops: '/servicos',
  petShopProfile: (id = ':id') => `/servicos/${id}`,
  agendamento: '/agendamento',
  appointment: (id = ':id') => `/agendamento/${id}`,
  suggestService: '/sugerir-servico',
  projectInfo: '/projeto-integrador',
  perfilUsuario: '/perfil',
  adminDashboard: '/admin',
  adminAgendamentos: '/admin/agendamentos',
  adminServicos: '/admin/servicos',
  adminPets: '/admin/pets',
  adminAvaliacoes: '/admin/avaliacoes',
  adminGaleria: '/admin/galeria',
  adminConfig: '/admin/configuracoes',
}
