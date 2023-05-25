import { Link } from "@remix-run/react"
import carrito from '../../public/img/carrito-de-compras.png'
function Navegacion() {


  return (
<nav className="navegacion">
    <ul className="menuItems">

      <Link 
      to="/" 
      >
      Inicio
      </Link>

      <Link 
      to="/blog" 
      >
      Noticias
      </Link>

      <Link 
      to="/nosotros" >
      Nosotros
      </Link>

      <Link 
      to="/tienda" >
      Tienda
      </Link>

      <Link 
      to="/carrito" >
        <img src={carrito} alt="Imagen de carrito de compras" />
      </Link>

    </ul>
  </nav>
  )
}

export default Navegacion
