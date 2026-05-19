/**
 * Usuário logado simulado — futuro: contexto de auth + GET /me
 */
export const mockCurrentUser = {
  id: 'user-1',
  fullName: 'Maria Silva',
  email: 'maria.silva@email.com',
  phone: '(11) 98765-4321',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
}

/**
 * Pets do usuário — futuro: GET /users/:id/pets
 */
export const mockUserPets = [
  {
    id: 'pet-1',
    name: 'Thor',
    species: 'Cachorro',
    breed: 'Golden Retriever',
    photoUrl: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop',
  },
  {
    id: 'pet-2',
    name: 'Luna',
    species: 'Gato',
    breed: 'Siamês',
    photoUrl: 'https://images.unsplash.com/photo-1513245543132-31f507938b75?w=400&h=300&fit=crop',
  },
]
