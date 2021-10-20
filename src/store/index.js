import { applyMiddleware, combineReducers, createStore } from "redux";
import { pokemonsReducer } from "./redusers/pokemonsReduser";
import { pokemonInfoReducer } from "./redusers/pokemonInfoReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pokemonsStore: pokemonsReducer,
  pokemonInfo: pokemonInfoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))