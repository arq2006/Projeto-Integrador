export function AdminSection({ adminStats }) {
  const cards = [
    { label: 'Serviços cadastrados', value: adminStats.totalServices },
    { label: 'Categorias', value: adminStats.categories },
    { label: 'Sugestões simuladas', value: adminStats.simulatedSuggestions },
    { label: 'Agendamentos simulados', value: adminStats.simulatedAppointments },
  ]

  return (
    <section id="admin" className="section">
      <div className="container">
        <h2 className="section-title">Área Administrativa (demonstração)</h2>
        <p className="admin-note">
          Esta seção é apenas conceitual. Não há login real nem banco de dados — os números
          abaixo são fictícios para mostrar como seria um painel simples.
        </p>

        <div className="stats-grid">
          {cards.map((card) => (
            <div key={card.label} className="stat-card">
              <div className="number">{card.value}</div>
              <div className="label">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
