/**
 * Categorias exigidas no Projeto Integrador e usadas em filtros, cards e estatisticas.
 */
export const serviceCategories = [
  {
    id: 'banho-tosa',
    label: 'Banho e Tosa',
    color: 'bg-sky-500',
    emoji: '🛁',
    description: 'Higiene, estetica e cuidados de pelo para caes e gatos.',
  },
  {
    id: 'clinica-veterinaria',
    label: 'Clínica Veterinária',
    color: 'bg-emerald-500',
    emoji: '🩺',
    description: 'Consultas, exames, orientacao e acompanhamento de saude.',
  },
  {
    id: 'hotel-pet',
    label: 'Hotel Pet',
    color: 'bg-amber-500',
    emoji: '🏨',
    description: 'Hospedagem, daycare e rotina monitorada para pets.',
  },
  {
    id: 'taxi-dog',
    label: 'Taxi Dog',
    color: 'bg-pink-500',
    emoji: '🚕',
    description: 'Transporte pet local com seguranca e agendamento.',
  },
  {
    id: 'vacinacao',
    label: 'Vacinação',
    color: 'bg-teal-500',
    emoji: '💉',
    description: 'Aplicacao e controle de vacinas essenciais.',
  },
  {
    id: 'produtos-pet',
    label: 'Produtos Pet',
    color: 'bg-violet-500',
    emoji: '🦴',
    description: 'Racoes, acessorios, brinquedos e itens de cuidado.',
  },
]

export function getCategoryById(id) {
  return serviceCategories.find((category) => category.id === id) ?? null
}
