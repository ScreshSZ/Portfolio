import '../styles/CardProyectos.css'

const CardProyectos = ({titulo, image, link}) => {
  return (
    <div className="cardProyecto">
        <h3>{titulo}</h3>
        <img src={image} alt='imagen proyecto'></img>
        <div>
            <a href={link} target='_blank' rel="noreferrer">Link</a>
        </div>
    </div>
  )
}

export default CardProyectos