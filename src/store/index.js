import { applyMiddleware, combineReducers, createStore } from "redux";
import { pokemonsReducer } from "./redusers/pokemonsReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  pokemonsStore: pokemonsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))