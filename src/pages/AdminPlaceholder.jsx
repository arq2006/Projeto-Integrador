import { useLocation } from 'react-router-dom'

/**
 * Páginas secundárias do admin — placeholders até existir CRUD real.
 */
export function AdminPlaceholder({ title }) {
  const location = useLocation()
  const name = title ?? location.pathname.split('/').pop()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold capitalize text-velaris-950">{name}</h1>
      <p className="mt-2 max-w-lg text-slate-600">
        Esta seção está preparada para receber tabelas e formulários conectados à API. Por ora,
        apenas roteamento e layout estão ativos.
      </p>
    </div>
  )
}
