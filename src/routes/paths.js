/**
 * Constantes de rotas — use em Links e navigate() para evitar strings soltas.
 * Na integração com API, estes paths permanecem; apenas a origem dos dados muda.
 */
export const PATHS = {
  home: '/',
  login: '/login',
  cadastro: '/cadastro',
  petShops: '/pet-shops',
  petShopProfile: (id = ':id') => `/pet-shops/${id}`,
  agendamento: '/agendar',
  perfilUsuario: '/perfil',
  adminDashboard: '/admin',
  adminAgendamentos: '/admin/agendamentos',
  adminServicos: '/admin/servicos',
  adminPets: '/admin/pets',
  adminAvaliacoes: '/admin/avaliacoes',
  adminGaleria: '/admin/galeria',
  adminConfig: '/admin/configuracoes',
}
