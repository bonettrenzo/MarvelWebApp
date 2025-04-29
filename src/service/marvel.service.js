import md5 from "md5"
import mockCharacter from "../const/mockdata"

// Estas claves deberían estar en variables de entorno
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
