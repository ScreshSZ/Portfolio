import Contacto from "./Contacto"
import Estudios from "./Estudios"
import Footer from "./Footer"
import Habilidades from "./Habilidades"
import Navbar from "./Navbar"
import Portada from "./Portada"
import Proyectos from "./Proyectos"
import SobreMi from "./SobreMi"


const Portfolio = () => {
  return (
    <>
        <Navbar />
        <Portada />
        <SobreMi />
        <Estudios />
        <Habilidades />
        <Proyectos />
        <Contacto />
        <Footer />
    </>
  )
}

export default Portfolio