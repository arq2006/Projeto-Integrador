import { mockPetShops } from '../data/petShops'

/** Resolve o id do pet shop a partir da query string (pré-seleção do agendamento). */
export function resolveShopIdFromSearchParams(params) {
  const id = params.get('petshopId')
  if (id && mockPetShops.some((p) => p.id === id)) return id
  return mockPetShops[0]?.id ?? ''
}
