import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar container navbar-expand-lg bg-none">
  <div className="container-fluid">
    <a className="navbar-brand logo text-white" href="#">Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link text-center text-white" aria-current="page" href="#sobremi">Sobre Mí</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white" href="#estudios">Estudios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white" href="#habilidades">Habilidades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white" href="#proyectos">Proyectos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-center text-white" href="#contacto">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar