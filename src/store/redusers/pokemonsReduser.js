const defaultState = {
  pokemons: [],
  pokeNames: [],
  isLoading: false,
  isError: false,
  error: '',
  prev: '',
  next: '',
};

const LOAD_START = "LOAD_START"
const LOAD_SUCC = "LOAD_SUCC"
const LOAD_ERR = "LOAD_ERR"

export const pokemonsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { ...state, isLoading: true }

    case LOAD_SUCC:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.results],
        isLoading: false,
        isError: false,
        error: '',
        prev: action.payload.previous,
        next: action.payload.next
      }

    case LOAD_ERR:
      return { ...state, isLoading: false, isError: true, error: action.payload.message }

    default:
      return state

  }
}

export const startLoad = (payload) => ({ type: LOAD_START })
export const getPokemons = (payload) => ({ type: LOAD_SUCC, payload })
export const errorLoad = (payload) => ({ type: LOAD_ERR, payload })