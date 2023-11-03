import '../styles/HabilidadLogo.css'

const HabilidadLogo = ({imgHabilidad}) => {
  return (
    <div className="contenedorTecnologiasIMG">
    <img className='logoTecnologias' src={imgHabilidad} alt='logoHabilidad'></img>
    </div>
  )
}

export default HabilidadLogo