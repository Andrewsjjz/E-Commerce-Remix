export async function getGaming () {
    const respuesta= await fetch(`http://127.0.0.1:1337/api/gamers?populate=imagen`)
    const resultado= await respuesta.json()
    return resultado
}   

export async function GetGamingId(url) {
    const respuesta = await fetch(`http://127.0.0.1:1337/api/gamers?filters[url]=${url}&populate=imagen&`)
    const resultado = await respuesta.json()
    return resultado
}
