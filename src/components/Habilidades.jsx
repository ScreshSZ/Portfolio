import '../styles/Habilidades.css'
import HabilidadLogo from './HabilidadLogo'
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Habilidades = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    // Definir la configuración de animación
    sr.reveal('.habilidades', {
      duration: 1000,
      origin: 'left',
      distance: '40px',
      delay: 200,
    });

    // Limpiar ScrollReveal cuando el componente se desmonte
    return () => sr.clean('.habilidades');
  }, []);


  return (
    <div className="contenedorHabilidades habilidades container py-4" id="habilidades">
      <h2 className='tituloHabilidades text-center'>Habilidades</h2>
      <hr></hr>
      <div className='contenedorIconos'>
        <HabilidadLogo imgHabilidad={'../imgHabilidades/angular.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/bootstrap.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/css.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/git.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/github.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/html.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/java.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/javascript.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/materialUI.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/mysql.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/netbeans.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/nodejs.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/react.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/tailwind.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/typescript.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/visual.png'} />
        <HabilidadLogo imgHabilidad={'../imgHabilidades/php.png'} />
      </div>
    </div>
  )
}

export default Habilidades