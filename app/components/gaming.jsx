import { Link } from "@remix-run/react"


function Gaming({gamer}) {

    const {url, imagen, nombre, precio, descripcion }= gamer
    // console.log(gamer.imagen.data[0,1].attributes.url)

  return (
    <div className='gaming'>

      <div className='contenido'>
        <div class="row">
          <div class="example-2 card">
            <div class="wrapper">
              <img src={gamer.imagen.data[0].attributes.url} alt="Imagenes de los productos" />
              <div class="header">
              </div>
              <div class="data">
                <div class="content">
                  <h1 class="title">{nombre}</h1>
                  <p class="text">${precio}</p>
                  <p className="descripcion">{descripcion}</p>
                  <Link to={`/gamers/${url}`} class="button">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


    </div>
    
  )
}

export default Gaming
