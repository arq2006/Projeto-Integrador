export function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#inicio" className="logo">
          Velaris <span>PetCare</span>
        </a>
        <nav className="nav">
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#busca">Busca</a>
          <a href="#sobre">Sobre o PI</a>
          <a href="#sugerir">Sugerir</a>
          <a href="#admin">Admin</a>
        </nav>
      </div>
    </header>
  )
}
