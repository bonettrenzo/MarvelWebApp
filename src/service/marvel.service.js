import md5 from "md5"
import mockCharacter from "../const/mockdata"

// se que deben ir en variables de entorno, pero como la API MARVEL, nunca me funcionó, pero no es por culpa 
// mia por no saber utilizarla, me parece que esta fuera de servicio, porque viendo videos la documentación carga completa
// y a mi la documentacion no me funciona, nisiquiera me salen los endpoints para probar desde la web de marvel
// me registre con dos correos de gmail a ver si era que habia ocurrido algo mal con un gmail ingresado, en la misma web
// algunas paginas estan rotas, no muestran cotenido, hasta use un vpn a ver si era por la región pero nada, nunca me funciono
// yo se que la funcionalidad es recuperar ts con New Date().getTime(), concatenarle la apikeyprivada, luego la apikeypublica, y md5 crear el hash
// en la url se que hay que pasar la ts, luego el hash, y la apikeypublica, pero no me funciono, hasta intente creando una api con node y express para hacer la gestion de las llamadas
// desde el backend y no hacer las peticiones directamente desde react a marvel api, sino desde el backend, pero no me funciono.
// en conclusion, parece que la api de marvel no funciona
const API_PUBLIC_KEY = "7d58e4198bd0273158ebba71f5bebb18"
const API_PRIVATE_KEY = "fa6757bc02a1b511780820f3aed93afb02e33c2a"
const API_BASE_URL = "https://gateway.marvel.com:443/v1/public"

const getAuthParams = () => {
  const timestamp = new Date().getTime().toString()
  const hash = md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

  return {
    ts: timestamp,
    apikey: API_PUBLIC_KEY,
    hash: hash,
  }
}

/* recuperar todos los personajes paginados */
export const fetchMarvelCharacters = async (offset = 0, limit = 20, nameStartsWith = "") => {
  const authParams = getAuthParams()
  let url = `${API_BASE_URL}/characters?limit=${limit}&offset=${offset}`

  if (nameStartsWith) {
    url += `&nameStartsWith=${encodeURIComponent(nameStartsWith)}`
  }

  url += `&ts=${authParams.ts}&apikey=${authParams.apikey}&hash=${authParams.hash}`

  const response = await fetch(url)

  if (!response.ok) {
    console.error(`Error: ${response.status}`) 
    return mockCharacter
  }

  return response.json()
}


/* recuperar un personaje por el id */
export const fetchMarvelCharacter = async (characterId) => {
  const authParams = getAuthParams()
  const url = `${API_BASE_URL}/characters/${characterId}?ts=${authParams.ts}&apikey=${authParams.apikey}&hash=${authParams.hash}`

  const response = await fetch(url)

  if (!response.ok) {
    console.error(`Error: ${response.status}`) 
    return mockCharacter
  }

  return response.json()
}


/* recuperar los comics de los personajes */
export const fetchCharacterComics = async (characterId, limit = 10) => {
  const authParams = getAuthParams()
  const url = `${API_BASE_URL}/characters/${characterId}/comics?limit=${limit}&ts=${authParams.ts}&apikey=${authParams.apikey}&hash=${authParams.hash}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
  }

  return response.json()
}
