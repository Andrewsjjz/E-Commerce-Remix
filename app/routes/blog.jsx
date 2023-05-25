import {getBlog} from '../api/blog.server'
import { useLoaderData } from '@remix-run/react'
import Blogs from '../components/blogs'
import styles from '../styles/noticias.css'

export function links() {
  return[
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export async function loader (){
  const blogs = await getBlog()

  return blogs.data
}

function Blog() {

  const blogs = useLoaderData()


  return (
<main className='contenedor'>
  <h2 className='heading'>Noticias</h2>
  <div className='blog'>
    {blogs.map(blog => (
      <Blogs
        key={blog.id}
        blog={blog.attributes}
      />
    ))}

  </div>
</main>
  )
}

export default Blog
