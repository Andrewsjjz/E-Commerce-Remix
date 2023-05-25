import { useLoaderData } from '@remix-run/react'
import { Link } from '@remix-run/react'

import { getBlog } from '../api/blog.server'
import { getGaming } from '../api/gaming.server'

import Gaming from '../components/gaming'
import Blogs from '../components/blogs'


import productos from '../styles/productos.css'
import noticias from '../styles/noticias.css'

export function links () {
  return [
    {
      rel: 'stylesheet',
      href: productos
    },
    {
      rel: 'stylesheet',
      href: noticias
    }
  ]
}

export async function loader() {
 const [gaming, blogs] = await Promise.all([
  getGaming(),
  getBlog()
  ])


  return {
    gaming: gaming.data,
    blogs: blogs.data,
  }

  


}

function Index() {

  const {gaming, blogs} = useLoaderData()
  console.log(gaming)
  console.log(blogs)


  return (
<>
<main>

<h2 className='heading'>Mejores productos</h2>



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

<div className='tienda'>
<Link
to= '/tienda'
className='buttons'
>
Ir a tienda
</Link>
</div>

        

 <h2 className='heading'>Ultimas noticias</h2>
  <div className='blog'>
    {blogs.map(blog => (
      <Blogs
        key={blog.id}
        blog={blog.attributes}
      />
    ))}

  </div>

  <div className='tienda'>
<Link
to= '/blog'
className='buttons'
>
Ir a noticias
</Link>
</div> 

</main>
</>
  )
}

export default Index
