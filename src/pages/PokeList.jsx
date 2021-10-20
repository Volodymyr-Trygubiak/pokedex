import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchPokemons } from "../asyncActions/pokemons";

import PokeCard from "../components/PokeCard/PokeCard";
import PokeBtn from "../components/shared/PokeBtn/PokeBtn";

import { BASE_URL, INFO_ROUTE } from "../utils/consts";

const PokeList = () => {
  const { next, pokemonsDetail, isLoading } = useSelector(state => state.pokemonsStore)
  const dispatch = useDispatch();
  const history = useHistory()


  useEffect(() => {
    dispatch(fetchPokemons(BASE_URL));

    // eslint-disable-next-lin
    return () => {
    } 
  }, [dispatch])

  return (
    <div className='container'>
      <div className='wrap'>
        <div className='cards-wrap'>
          {pokemonsDetail.map((pokemon, index) =>
            <PokeCard
              name={pokemon.name}
              image={pokemon.image}
              type={pokemon.type}
              key={index}
              onClick={() => history.push(INFO_ROUTE + '/' + pokemon.id)}
            />
          )}
        </div>

        <PokeBtn disabled={isLoading} onClick={() => dispatch(fetchPokemons(next))}>Load More</PokeBtn>
      </div>
    </div>
  )
}

export default PokeList