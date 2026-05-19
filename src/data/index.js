/**
 * Ponto único de importação dos mocks — simula camada de serviço.
 * Futuro: substitua estas funções por chamadas fetch/axios mantendo a mesma assinatura.
 */
export { mockPetShops } from './petShops'
export { serviceCategories } from './categories'
export { mockCurrentUser, mockUserPets } from './users'
export { mockAppointments, mockAdminTodayAppointments } from './appointments'
export { mockReviewsByShopId, getReviewsForShop } from './reviews'

import { mockPetShops } from './petShops'

export function getPetShopById(id) {
  return mockPetShops.find((p) => p.id === id) ?? null
}
