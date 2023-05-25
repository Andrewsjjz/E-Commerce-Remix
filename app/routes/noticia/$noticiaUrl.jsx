import { useLoaderData } from '@remix-run/react'
import { getBlogId } from '../../api/blog.server'
import {ReiniciarFecha} from '../../utils/helpers'
import detallesnoticias from '../../styles/detallesnoticias.css'

export async function loader({ params }) {

  const { noticiaUrl } = params
  const noticia = await getBlogId(noticiaUrl)

  return noticia

}

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: detallesnoticias
    }
  ]
  
}

export default function Noticia() {

  const noticia = useLoaderData()
  const {Titulo, Descripcion, publishedAt, imagen} =noticia.data[0].attributes


  return (

<main className='noticia'>
  <div className=''>
    <img src={noticia.data[0].attributes.imagen.data.attributes.formats.medium.url} alt="" className='imagen'/>
  <div className='contenido'>
  <h1>{Titulo}</h1>
  <h4 className='fecha'>{ReiniciarFecha(publishedAt)}</h4>
  <p className='descripcion'>{Descripcion}</p>
  </div>
  </div>

</main>

  )
}
