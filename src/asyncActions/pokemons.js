import axios from "axios"
import { getPokemons, startLoad, loadDetails, endLoad } from "../store/redusers/pokemonsReduser"

export const fetchPokemons = (url, limit = 12) => {
  return dispatch => {
    dispatch(startLoad())

    axios.get(url, {
      params: {
        limit: limit
      }
    })
      .then(response => {
        Promise.all(
          response.data.results.map(async (link) => {
            const { data: pokemon } = await axios.get(link.url)
            const pokemons = {
              id: pokemon.id,
              name: link.name,
              image: pokemon.sprites.other.dream_world.front_default,
              type: pokemon.types[0].type.name
            }
            return pokemons
          }))
          .then(res => dispatch(loadDetails(res)))
          dispatch(endLoad())
        return dispatch(getPokemons(response.data))
      })
      .catch(error => {
        console.log(error);
      })
  }
}

