export async function getGaming () {
    const respuesta= await fetch(`${process.env.API_URL}/api/gamers?populate=imagen`)
    const resultado= await respuesta.json()
    return resultado
}   

export async function GetGamingId(url) {
    const respuesta = await fetch(`${process.env.API_URL}/api/gamers?filters[url]=${url}&populate=imagen&`)
    const resultado = await respuesta.json()
    return resultado
}
