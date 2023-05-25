import { useState } from 'react'
import {GetGamingId} from '../../api/gaming.server'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import styles from '../../styles/detallesproductos.css'


export function meta({data}) {
  return [
    {
      title: `ElectroCommer - ${data.data[0].attributes.nombre}`,
    },

  ]
}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]

}


export async function loader ({params}){

  const {gamersUrl} = params
  const gamer = await GetGamingId(gamersUrl)

  if(gamer.data.length === 0) {
    throw new Response('' , {
      status: 404,
      statusText: 'Producto no encontrado'
    })
  }

return gamer

}



function Gaming() {

const [cantidad, setCantidad] = useState(0)
const {AgregarCarrito} = useOutletContext()


const handleSubmit = e => {
  e.preventDefault()

  if(cantidad < 1){
    alert('Por favor ingrese una cantidad')
    return
  }
  const productoSeleccionado = {
    id: gamer.data[0].id,
    imagen: imagen.data[0].attributes.url,
    nombre,
    precio, 
    cantidad

  }

  AgregarCarrito(productoSeleccionado)
}

const gamer = useLoaderData()

const {nombre, descripcion, precio, imagen} =gamer.data[0].attributes

  return (
      <main className='contenedor gaming'>

        <div className='imagen'>
          <img src={imagen.data[0].attributes.url} alt="Imagen Producto" />
          <div className='descripcion-producto'>
              <h2>{nombre}</h2>
 
              <h3>${precio}</h3>

              <form className='formulario' onSubmit={handleSubmit}>
                <label htmlFor='cantidad'>Cantidad</label>
                <select 
                id="cantidad"
                onChange={e => setCantidad(parseInt(e.target.value))}
                >
                <option value="">-- Seleccione --</option>   
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
              <button class="cta">
    <span class="hover-underline-animation"> Compra ahora </span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
</button>
              </form>

              <h3>Resumen del producto</h3>
              <p className='descripcion'>{descripcion}</p>

          </div>
          </div>
      </main>
  )
}

export default Gaming
