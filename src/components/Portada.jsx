import '../styles/Portada.css'

const Portada = () => {
  return (
    <div id="carouselExampleSlidesOnly sobremi" className="portada carousel slide" data-bs-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./portada1.jpg" className="d-block portada w-100" alt="portada"></img>
    </div>
    <div className="carousel-item">
      <img src="./portada2.jpg" className="d-block portada w-100" alt="portada"></img>
    </div>
    <div className="carousel-item">
      <img src="./portada3.jpg" className="d-block portada w-100" alt="portada"></img>
    </div>
  </div>
</div>
  )
}

export default Portada