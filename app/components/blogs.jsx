import { Link } from '@remix-run/react'
import { ReiniciarFecha } from '../utils/helpers'

function Blogs({ blog }) {

  const { Descripcion, Titulo, url, imagen, publishedAt } = blog
  // console.log(blog.imagen.data.attributes.url)

  return (
    <article className='noticias'>
      <h3 className='imagen'>{Titulo}</h3>
      <img src={blog.imagen.data.attributes.url} alt="" />
      <div className='contenido'>
        <p className='fecha'>{ReiniciarFecha(publishedAt)}</p>
        <p className='resumen'>{Descripcion}</p>
        <Link
          to={`/noticia/${url}`}
          className='enlace'
        >
          Leer mas
        </Link>
      </div>
    </article>
  )
}

export default Blogs
