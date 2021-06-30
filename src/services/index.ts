import { PokeTypes } from "../@types/PokeTypes.interface";

export const pokeSearch = async (search: string): Promise<PokeTypes> => 
  await fetch(`${import.meta.env.VITE_API_V2}${search}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error)
  });

// export const pokeInit = async (): Promise<PokeTypes> => 
//   await fetch(`${import.meta.env.VITE_API_V2_ALL}pokemon?limit=10&offset=0`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok')
//     }
//     return response.json()
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error)
//   })
  