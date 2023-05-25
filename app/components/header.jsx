import { Link, useLocation } from "@remix-run/react"
import Navegacion from "./navegacion"


function Header() {


  return (
    <>

  <header className="header">
    <div className="contenedor barra">
      {/* <p className="parrafo" data-item='ElectroCommerce'>ElectroCommerce</p> */}

      <Navegacion/>
    </div>
  </header>
    </>
  )
}

export default Header
