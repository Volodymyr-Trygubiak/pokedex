import axios from "axios"
import { getPokemons, startLoad, loadDetails } from "../store/redusers/pokemonsReduser"
import { BASE_URL } from "../utils/consts"


export const fetchPokemons = (url, baseUrl = BASE_URL) => {



  return dispatch => {
    dispatch(startLoad())

    axios.get(url, {
      params: {
        limit: 12
      }
    })
      .then(response => {
        const arr = [];
        response.data.results.forEach(link => {
          arr.push(axios.get(`${baseUrl}/${link.name}`))
        });
        Promise.all(arr).then(response => {
          response.forEach(elem => {
            dispatch(loadDetails(elem.data))
          });
        })
        return dispatch(getPokemons(response.data))
      })

      .catch(error => {
        console.log(error);
      })
  }
}

