import '../styles/Proyectos.css'
import CardProyectos from './CardProyectos'
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Proyectos = () => {

  useEffect(() => {
    const sr = ScrollReveal();

    sr.reveal('.proyectos', {
      duration: 1000,
      origin: 'right',
      distance: '40px',
      delay: 200,
    });

    return () => sr.clean('.proyectos');
  }, []);

  return (
    <div className="contenedorProyectos proyectos container" id="proyectos">
        <h2 className="tituloProyectos text-center">Proyectos</h2>
        <hr></hr>
        <div className='proyectosCards'>
        <CardProyectos titulo={"Web Peliculas"} image={'./imgProyectos/pelis.png'} link={"https://peliculareact.vercel.app/"} />
        <CardProyectos titulo={"Web Rick And Morty"} image={'./imgProyectos/rickmorty.png'} link={"https://rickandmortyreact-delta.vercel.app/"} />
            <CardProyectos titulo={"Web Juegos"} image={'./imgProyectos/proyecto6.png'} link={"https://proyecto-portfolio2.vercel.app/"} />
            <CardProyectos titulo={"Web Gym"} image={'./imgProyectos/proyecto2.png'} link={"https://proyecto-portfolio3.vercel.app/"} />
            <CardProyectos titulo={"Web Pizzeria"} image={'./imgProyectos/proyecto3.png'} link={"https://proyecto-portfolio4.vercel.app/"} />
            <CardProyectos titulo={"Web Barberia"} image={'./imgProyectos/proyecto4.png'} link={"https://proyecto-portfolio8.vercel.app/"} />
            <CardProyectos titulo={"Web"} image={'./imgProyectos/proyecto5.png'} link={"https://proyecto-portfolio1.vercel.app/"} />
            <CardProyectos titulo={"Web Turismo"} image={'./imgProyectos/proyecto1.png'} link={"https://desafio6-nine.vercel.app/"} />
            
        </div>
    </div>
  )
}

export default Proyectos