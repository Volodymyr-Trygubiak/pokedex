import PokeList from "../pages/PokeList"
import PokeInfo from "../pages/PokeInfo"
import PokeError from "../pages/PokeError"


const RouterNames = Object.freeze({
  LIST: '/',
  INFO: '/info',
  ERROR: '/error'
})

export const publicRoutes = [
  { path: RouterNames.LIST, exact: true, component: PokeList },
  { path: RouterNames.INFO, exact: true, component: PokeInfo },
  { path: RouterNames.ERROR, component: PokeError },
]