import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ServiceCard } from './components/ServiceCard'
import { SearchSection } from './components/SearchSection'
import { SuggestForm } from './components/SuggestForm'
import { AdminSection } from './components/AdminSection'
import { Footer } from './components/Footer'
import { services, adminStats } from './data/services'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="servicos" className="section">
          <div className="container">
            <h2 className="section-title">Serviços da comunidade</h2>
            <p className="section-subtitle">
              Alguns estabelecimentos pet de Goiânia cadastrados no protótipo.
            </p>
            <div className="cards-grid">
              {services.map((servico) => (
                <ServiceCard key={servico.id} service={servico} />
              ))}
            </div>
          </div>
        </section>

        <SearchSection services={services} />

        <section id="sobre" className="section">
          <div className="container">
            <h2 className="section-title">Sobre o Projeto Integrador</h2>
            <p className="section-subtitle">
              Projeto Integrador 2026/1 — SENAI FATESG — Tema Conecta Comunidade
            </p>

            <div className="info-box">
              <h3>Problema</h3>
              <p>
                Serviços pet de bairro costumam ser divulgados de forma espalhada, em grupos,
                redes sociais e indicações. Isso dificulta encontrar informações confiáveis sobre
                endereço, horário e tipos de atendimento disponíveis na região.
              </p>
            </div>

            <div className="info-box">
              <h3>Objetivo</h3>
              <p>
                Criar um protótipo simples que organize e divulgue serviços pet locais em
                Goiânia, ajudando tutores a encontrar pet shops, clínicas, hotel pet, vacinação
                e taxi dog de forma mais prática.
              </p>
            </div>

            <div className="info-box">
              <h3>Relação com a comunidade</h3>
              <p>
                O Velaris PetCare funciona como uma vitrine comunitária: moradores podem
                consultar serviços da região e sugerir novos estabelecimentos. A ideia é
                fortalecer o comércio local e a confiança entre tutores e prestadores de bairro.
              </p>
            </div>

            <div className="info-box">
              <h3>Conecta Comunidade</h3>
              <p>
                Este projeto se encaixa no tema do PI porque aproxima pessoas da comunidade —
                tutores de pets e prestadores locais — usando tecnologia simples para facilitar
                a divulgação e o acesso a serviços pet no dia a dia.
              </p>
            </div>
          </div>
        </section>

        <SuggestForm />
        <AdminSection adminStats={adminStats} />
      </main>
      <Footer />
    </>
  )
}

export default App
