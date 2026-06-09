import { mockPetShops } from './petShops'

export const mockServices = mockPetShops

export function getServiceById(id) {
  return mockServices.find((service) => service.id === id) ?? null
}
