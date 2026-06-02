/**
 * Ponto único de importação dos mocks — simula camada de serviço.
 * Futuro: substitua estas funções por chamadas fetch/axios mantendo a mesma assinatura.
 */
export { mockPetShops } from './petShops'
export { mockServices, getServiceById } from './services'
export { serviceCategories, getCategoryById } from './categories'
export { mockCurrentUser, mockUserPets } from './users'
export { mockAppointments, mockAdminTodayAppointments } from './appointments'
export { mockReviewsByShopId, getReviewsForShop } from './reviews'
export { mockStats, mockSuggestions, getCategoryCounts } from './stats'
export { governanceRisks } from './risks'

import { mockPetShops } from './petShops'

export function getPetShopById(id) {
  return mockPetShops.find((p) => p.id === id) ?? null
}
