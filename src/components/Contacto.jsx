import "../styles/Contacto.css";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Contacto = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.contacto', {
      duration: 1000,
      origin: 'top',
      distance: '40px',
      delay: 200,
    });

    return () => sr.clean('.contacto');
  }, []);

  return (
    <div className="contenedorContacto contacto container" id="contacto">
      <h2 className="tituloContacto text-center">Contacto</h2>
      <hr></hr>
      <div className="contenedorInfo">
        <div>
          <img src="./imgContacto/email.png" alt="email"></img>
          <a className="text-white" href="santizeniquel2020@hotmail.com">santizeniquel2020@hotmail.com</a>
        </div>
        <div>
          <img src="./imgContacto/telefono.png" alt="telefono"></img>
          <a className="text-white" href="tel:3794150486">3794-150486</a>
        </div>
        <div>
          <img src="./imgContacto/ubicacion.png" alt="ubicacion"></img>
          <a className="text-white">Corrientes Capital, Argentina</a>
        </div>
      </div>
      <div className="contenedorRedes">
      <div>
        <a href="https://www.instagram.com/santizeniquel8/" target="_blank" rel="noreferrer"><img src="./imgContacto/instagram.png" alt="instagram"></img></a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/santizeniquelok/" target="_blank" rel="noreferrer"><img src="./imgContacto/linkedin.png" alt="linkedin"></img></a>
        </div>
        <div>
            <a href="https://github.com/ScreshSZ" target="_blank" rel="noreferrer"><img src="./imgContacto/github.png" alt="github"></img></a>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
