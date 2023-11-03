import '../styles/CardEstudios.css'

const CardEstudios = ({imgEstudio}) => {
  return (
    <div className='contenedorImg'>
        <img className="logoEstudios" src={imgEstudio}></img>
    </div>
  )
}

export default CardEstudios