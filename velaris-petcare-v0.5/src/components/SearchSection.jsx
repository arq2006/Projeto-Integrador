import { useState } from 'react'
import { ServiceCard } from './ServiceCard'
import { categories } from '../data/services'

export function SearchSection({ services }) {
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('')

  const resultados = services.filter((servico) => {
    const textoMinusculo = texto.toLowerCase()
    const combinaTexto =
      !textoMinusculo ||
      servico.name.toLowerCase().includes(textoMinusculo) ||
      servico.neighborhood.toLowerCase().includes(textoMinusculo) ||
      servico.description.toLowerCase().includes(textoMinusculo)

    const combinaCategoria = !categoria || servico.category === categoria

    return combinaTexto && combinaCategoria
  })

  return (
    <section id="busca" className="section">
      <div className="container">
        <h2 className="section-title">Buscar serviços</h2>
        <p className="section-subtitle">
          Digite um nome, bairro ou palavra-chave e filtre por categoria.
        </p>

        <div className="search-box">
          <input
            type="text"
            placeholder="Ex: banho, Bueno, clínica..."
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
          />
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">Todas as categorias</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <p className="search-result-count">
          {resultados.length} serviço(s) encontrado(s)
        </p>

        <div className="cards-grid">
          {resultados.map((servico) => (
            <ServiceCard key={servico.id} service={servico} />
          ))}
        </div>
      </div>
    </section>
  )
}
