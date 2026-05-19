/**
 * Agendamentos mock — futuro: GET /appointments?userId=...
 * status: confirmado | pendente | cancelado
 */
export const mockAppointments = [
  {
    id: 'apt-1',
    petShopId: 'ps-1',
    petShopName: 'Patinhas & Cia',
    service: 'Banho + Hidratação',
    petId: 'pet-1',
    petName: 'Thor',
    date: '2026-05-18',
    time: '10:00',
    status: 'confirmado',
  },
  {
    id: 'apt-2',
    petShopId: 'ps-3',
    petShopName: 'AuMiau Spa',
    service: 'Tosa higiênica',
    petId: 'pet-2',
    petName: 'Luna',
    date: '2026-05-22',
    time: '15:30',
    status: 'confirmado',
  },
  {
    id: 'apt-3',
    petShopId: 'ps-2',
    petShopName: 'Lar Doce Pet',
    service: 'Consulta veterinária',
    petId: 'pet-1',
    petName: 'Thor',
    date: '2026-05-28',
    time: '09:00',
    status: 'pendente',
  },
]

/** Agendamentos do painel admin (hoje) — futuro: GET /admin/appointments/today */
export const mockAdminTodayAppointments = [
  {
    id: 'adm-1',
    time: '09:00',
    service: 'Banho',
    petName: 'Mel',
    ownerName: 'João Pereira',
    status: 'confirmado',
  },
  {
    id: 'adm-2',
    time: '11:30',
    service: 'Tosa completa',
    petName: 'Bob',
    ownerName: 'Ana Costa',
    status: 'pendente',
  },
  {
    id: 'adm-3',
    time: '14:00',
    service: 'Hotel (check-in)',
    petName: 'Nina',
    ownerName: 'Carlos Mendes',
    status: 'confirmado',
  },
]
