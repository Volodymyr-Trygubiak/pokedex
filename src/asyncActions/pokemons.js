import axios from "axios"
import { startLoad, getPokemons, errorLoad } from "../store/redusers/pokemonsReduser"
// const api = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;

export const fetchPokemons = (url) => {

  return dispatch => {
    dispatch(startLoad())
    axios.get(url)
      .then(response => {
        console.log(response.data);
        return dispatch(getPokemons(response.data))
      })
      .catch(error => {
        dispatch(errorLoad(error))
      })
  }
}

