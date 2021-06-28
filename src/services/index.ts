import { PokeTypes } from "../@types/PokeTypes.interface";
import { ImportMeta } from "../@types/ImportTypeEnv.interface";

export const pokeSearch = async (search: string):  Promise<void> => {
  await fetch(`${import.meta.env.VITE_API_V2}${search}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error)
  })
}
  