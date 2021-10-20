import axios from "axios"
import { loadInfo } from "../store/redusers/pokemonInfoReduser"
import { BASE_URL } from "../utils/consts"


export const fetchPokemonInfo = (id, baseUrl = BASE_URL) => {

  return dispatch => {
    axios.get(`${baseUrl}/${id}`)
      .then(response => {
        console.log(response.data);
        const info = {
          id: response.data.id,
          name: response.data.name,
          img: response.data.sprites.other.dream_world.front_default,
          type: response.data.types[0].type.name,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          sPAttack: response.data.stats[3].base_stat,
          sPDefense: response.data.stats[4].base_stat,
          speed: response.data.stats[5].base_stat,
          weight: response.data.weight,
          totalMoves: response.data.moves.length,
        }

        return dispatch(loadInfo(info))
      })

      .catch(error => {
        console.log(error);
      })
  }
}

