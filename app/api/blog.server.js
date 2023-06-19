export async function getBlog () {
    const respuesta= await fetch(`${process.env.API_URL}/api/informacion-generals?populate=imagen`)
    const resultado= await respuesta.json()
    return resultado
}   

export async function getBlogId (url) {
    const respuesta= await fetch(`${process.env.API_URL}/api/informacion-generals?filters[url]=${url}&populate=imagen`)
    const resultado= await respuesta.json()
    return resultado
}  