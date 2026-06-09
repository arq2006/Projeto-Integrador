import { useState } from 'react'
import { categories } from '../data/services'

export function SuggestForm() {
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setEnviado(true)
    e.target.reset()
  }

  return (
    <section id="sugerir" className="section">
      <div className="container">
        <h2 className="section-title">Sugerir um serviço</h2>
        <p className="section-subtitle">
          Conhece um pet shop ou clínica da região? Envie uma sugestão para a comunidade.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome do estabelecimento</label>
            <input id="nome" name="nome" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="categoria">Categoria</label>
            <select id="categoria" name="categoria" required>
              <option value="">Selecione...</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="bairro">Bairro</label>
            <input id="bairro" name="bairro" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="contato">Contato (telefone ou WhatsApp)</label>
            <input
              id="contato"
              name="contato"
              type="text"
              /* Colocar um limite para o usuario escrever o numero e não passar! */
              /* Apenas numero */
              placeholder="Ex: (62) 99999-0000"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição curta</label>
            <textarea id="descricao" name="descricao" required />
          </div>

          <button type="submit" className="btn">
            Enviar sugestão
          </button>

          {enviado && (
            <p className="success-msg">
              Obrigado! Sua sugestão foi recebida (demonstração — nenhum dado foi salvo).
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
