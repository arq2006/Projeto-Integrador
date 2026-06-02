import { CardPetShop } from './CardPetShop'

export function ServiceCard({ service, variant = 'list' }) {
  return <CardPetShop shop={service} variant={variant} />
}
