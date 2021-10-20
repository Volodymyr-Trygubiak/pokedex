import { LOAD_START, LOAD_SUCC, LOAD_ERR, LOAD_DETAILS, CLEAR } from '../../utils/consts'

const defaultState = {
  pokemonsList: [],
  pokemonsDetail: [],
  isLoading: false,
  isError: false,
  error: '',
  prev: '',
  next: '',
};



export const pokemonsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { ...state, isLoading: true }

    case LOAD_SUCC:
      return {
        ...state,
        pokemonsList: [...state.pokemonsList, ...action.payload.results],
        isLoading: false,
        isError: false,
        error: '',
        prev: action.payload.previous,
        next: action.payload.next
      }

    case LOAD_ERR:
      return { ...state, isLoading: false, isError: true, error: action.payload.message }

    case LOAD_DETAILS:
      return {
        ...state,
        pokemonsDetail: [...state.pokemonsDetail, ...action.payload],
        isLoading: false,
        isError: false,
        error: '',
      }

    case CLEAR:
      return { 
        ...state, 
        pokemonsList: [],
        pokemonsDetail: [],
        isLoading: false,
        isError: false,
        error: '',
        prev: '',
        next: '', 
      }

    default:
      return state

  }
}


export const startLoad = () => ({ type: LOAD_START })
export const getPokemons = (payload) => ({ type: LOAD_SUCC, payload })
export const errorLoad = (payload) => ({ type: LOAD_ERR, payload })

export const clear = () => ({ type: CLEAR })

export const loadDetails = (payload) => ({ type: LOAD_DETAILS, payload })