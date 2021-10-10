import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../asyncActions/pokemons";

import PokeCard from "../components/PokeCard/PokeCard";
import PokeBtn from "../components/shared/PokeBtn/PokeBtn";

import { BASE_URL } from "../utils/consts";

const PokeList = () => {
  const dispatch = useDispatch();
  const { next, pokemonsDetail, isLoading } = useSelector(state => state.pokemonsStore)


  useEffect(() => {
    dispatch(fetchPokemons(BASE_URL));
  }, [dispatch])

  return (
    <div className='container'>
      <div className='wrap'>
        <div className='cards-wrap'>
          {pokemonsDetail.map((pokemon, index) =>
            <PokeCard
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index} />
          )}
        </div>
        <PokeBtn disabled={isLoading} onClick={() => dispatch(fetchPokemons(next))}>Load More</PokeBtn>
      </div>
    </div>
  )
}

export default PokeList