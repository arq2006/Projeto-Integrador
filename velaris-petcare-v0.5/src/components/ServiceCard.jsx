import { useState } from 'react'

export function ServiceCard({ service }) {
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

  return (
    <article className="service-card">
      <h3>{service.name}</h3>
      <span className="category">{service.category}</span>
      <p className="neighborhood">{service.neighborhood}</p>
      <p className="service-summary">{service.description}</p>

      <button
        type="button"
        className="btn btn-small"
        onClick={() => setMostrarDetalhes(!mostrarDetalhes)}
      >
        {mostrarDetalhes ? 'Ocultar detalhes' : 'Ver detalhes'}
      </button>

      {mostrarDetalhes && (
        <div className="service-details">
          <p>
            <strong>Descrição:</strong> {service.description}
          </p>
          <p>
            <strong>Endereço:</strong> {service.address}
          </p>
          <p>
            <strong>Contato:</strong> {service.contact}
          </p>
          <p>
            <strong>Horário:</strong> {service.hours}
          </p>
          <p>
            <strong>Categoria:</strong> {service.category}
          </p>
          <p>
            <strong>Bairro:</strong> {service.neighborhood}
          </p>
        </div>
      )}
    </article>
  )
}
