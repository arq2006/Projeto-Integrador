/**
 * Avaliações por pet shop — futuro: GET /pet-shops/:id/reviews
 */
export const mockReviewsByShopId = {
  'ps-1': [
    {
      id: 'rv-1',
      authorName: 'Fernanda Lopes',
      authorAvatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      date: '2026-04-02',
      text: 'Atendimento impecável! O Thor saiu cheirosinho e o pelo super macio.',
    },
    {
      id: 'rv-2',
      authorName: 'Ricardo Almeida',
      authorAvatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 4,
      date: '2026-03-18',
      text: 'Muito profissionais. Só achei a agenda um pouco cheia aos sábados.',
    },
  ],
  'ps-2': [
    {
      id: 'rv-3',
      authorName: 'Juliana Prado',
      authorAvatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      date: '2026-05-01',
      text: 'Consulta tranquila, explicação clara e preço justo.',
    },
  ],
  'ps-3': [
    {
      id: 'rv-4',
      authorName: 'Paula M.',
      authorAvatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      rating: 5,
      date: '2026-05-10',
      text: 'A Luna amou o spa. Voltaremos com certeza.',
    },
  ],
}

/** Fallback quando não houver reviews */
export function getReviewsForShop(shopId) {
  return mockReviewsByShopId[shopId] ?? []
}
