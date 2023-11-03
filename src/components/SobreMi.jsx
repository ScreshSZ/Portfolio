import { useEffect } from 'react';
import '../styles/SobreMi.css'
import ScrollReveal from 'scrollreveal';

const SobreMi = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.sobremi', {
      duration: 1000,
      origin: 'top',
      distance: '40px',
      delay: 200,
    });

    return () => sr.clean('.sobremi');
  }, []);

  return (
    <div className="contenedorDatos sobremi container my-5">
      <div className="row">
        <div className="contenedorPerfil col-sm-12 col-md-6 col-lg-4">
          <img src="./imgPerfil.jpeg" className="imagen-perfil"></img>
          <h1 className="nombrePerfil">Zeniquel Santiago de Jesús</h1>
        </div>
        <div className="descripcionPerfil col-sm-12 col-md-6 col-lg-8 ">
          <h2 className="miTrabajo text-center">
            SOY PROGRAMADOR / DESARROLLADOR WEB JR.
          </h2>
          <div></div>
          <h3 className="descripcion text-white text-center">
          Mi nombre es Santiago y soy un estudiante autodidacta de programación. Durante varios años, he ampliado mis conocimientos a través de cursos en línea y recursos disponibles en plataformas como YouTube. Mi pasión por la tecnología me impulsa a aprender de manera continua para mejorar mis habilidades.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SobreMi