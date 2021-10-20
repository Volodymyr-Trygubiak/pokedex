import { LOAD_INFO, CLEAR_INFO } from "../../utils/consts"

const defaultState = {
  pokemonInfo: {},
  isLoading: false,
  isError: false
}

export const pokemonInfoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_INFO:
      return {
        ...state,
        pokemonInfo: { ...action.payload }
      }
    case CLEAR_INFO:
      return {
        ...state,
        pokemonInfo: {},
        isLoading: false,
        isError: false
      }
    default:
      return state
  }
}

export const loadInfo = (payload) => ({ type: LOAD_INFO, payload })
export const clearInfo = () => ({ type: CLEAR_INFO })