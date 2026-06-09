import { mockAdminTodayAppointments, mockAppointments } from './appointments'
import { serviceCategories } from './categories'
import { mockPetShops } from './petShops'

export const mockSuggestions = [
  {
    id: 'sug-1',
    establishmentName: 'Bicho Feliz Comunitario',
    category: 'Banho e Tosa',
    neighborhood: 'Campinas',
    address: 'Rua Santa Luzia, 88 - Campinas',
    phone: '(62) 98888-1010',
    suggestedBy: 'Rafaela Souza',
    status: 'Em revisão',
  },
  {
    id: 'sug-2',
    establishmentName: 'Vacina Pet Norte',
    category: 'Vacinação',
    neighborhood: 'Setor Urias Magalhaes',
    address: 'Av. Goias Norte, 2450',
    phone: '(62) 97777-2020',
    suggestedBy: 'Bruno Martins',
    status: 'Aguardando contato',
  },
  {
    id: 'sug-3',
    establishmentName: 'Taxi Dog Leste',
    category: 'Taxi Dog',
    neighborhood: 'Jardim Novo Mundo',
    address: 'Atendimento movel',
    phone: '(62) 96666-3030',
    suggestedBy: 'Camila Duarte',
    status: 'Pendente',
  },
]

export function getCategoryCounts() {
  return serviceCategories.map((category) => ({
    ...category,
    total: mockPetShops.filter((service) => service.categoryId === category.id).length,
  }))
}

export const mockStats = {
  totalServices: mockPetShops.length,
  simulatedAppointments: mockAppointments.length + mockAdminTodayAppointments.length,
  suggestionsReceived: mockSuggestions.length,
  activeNeighborhoods: new Set(mockPetShops.map((service) => service.neighborhood)).size,
}
