import CardEstudios from "./CardEstudios"
import '../styles/Estudios.css'
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

const Estudios = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.estudios', {
      delay: 500
    });

    return () => sr.clean('.estudios');
  }, []);

  return (
    <div className="container estudios contenedorEstudios" id="estudios">
        <h2 className="estudioTitulo text-center py-4">Estudios</h2>
        <hr className="text-white"></hr>
        <div className="d-flex flex-wrap justify-content-around">
            <CardEstudios imgEstudio={'./unnelogo.jpg'}  />
            <CardEstudios imgEstudio={'./imgArgPrograma.png'}  />
            <CardEstudios imgEstudio={'./folcademylogo.jpg'}  />
            <CardEstudios imgEstudio={'./utnlogo.png'}  />
            <CardEstudios imgEstudio={'./codoacodo.png'}  />
            <CardEstudios imgEstudio={'./talentosdigitales.png'}  />
        </div>
    </div>
  )
}

export default Estudios