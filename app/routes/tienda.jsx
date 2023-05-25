import { useLoaderData } from '@remix-run/react'
import {getGaming} from '../api/gaming.server' 
import Gaming from '../components/gaming'
import productos from '../styles/productos.css'

export function meta() {
  return (
      [            
      {charset: 'utf-8'},
      {title: 'ElectroCommerce - Tienda'},
      {viewport: "width=device-width, initial-scale=1"}            
      ]
  )
}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: productos
    }, 

  ]
}

export async function loader () {
  const gaming = await getGaming()
    
   return gaming.data

}
function Tienda() {

  const gaming = useLoaderData()

  return (

    <main className='contenedor'>
      <h2 className='heading'>Nuestro productos</h2>

        {gaming.length && (
          <div className='gaming-grid'>
            {gaming.map( gamer => (
              <Gaming
              key={gamer.id}
              gamer={gamer.attributes}
              />
            ))}
          </div>
        )}
    </main>
  )

}

export default Tienda
