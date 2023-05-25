import imagenNosotros from "../../public/img/How-to-Become-a-React-Developer.png"
import nosotros from "../styles/nosotros.css"

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: nosotros
    },
  ]
}

function Nosotros() {

  return (
        <main className='contenedor nosotros'>
            <h2 className='heading'>Nosotros</h2>
            <div className='contenido'>
              <img src={imagenNosotros} alt="imagen sobre nosotros"/>

              <div className=''>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non nostrum, aliquid quasi assumenda,
                  iste sit voluptatum ipsum mollitia nesciunt quae aliquam culpa illum esse. Perferendis in fugiat iure 
                  nihil.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi non nostrum, aliquid quasi assumenda,
                  iste sit voluptatum ipsum mollitia nesciunt quae aliquam culpa illum esse. Perferendis in fugiat iure 
                  nihil.</p>
              </div>
            </div>
        </main>
  )
}

export default Nosotros
