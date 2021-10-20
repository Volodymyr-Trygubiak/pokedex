import PokeList from "../pages/PokeList"
import PokeInfo from "../pages/PokeInfo"
import PokeError from "../pages/PokeError"

import { LIST_ROUTE, INFO_ROUTE, ERROR_ROUTE } from '../utils/consts'


export const publicRoutes = [
  { path: LIST_ROUTE, exact: true, component: PokeList },
  { path: INFO_ROUTE + '/:id', component: PokeInfo },
  { path: ERROR_ROUTE, component: PokeError },
]