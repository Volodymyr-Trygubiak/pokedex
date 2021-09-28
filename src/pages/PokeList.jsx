import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../asyncActions/pokemons";
import PokeCard from "../components/PokeCard/PokeCard";

const PokeList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons)


  useEffect(() => {
    dispatch(fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=12'));
    console.log(pokemons);
  }, [])

  return (
    <div>
      <div className='container'>
        <div className='cards-wrap'>
          {pokemons.pokemons.map((pokemon, index) =>
            <PokeCard name={pokemon.name} key={index} />
          )}
        </div>
      </div>
      <button onClick={() => dispatch(fetchPokemons(pokemons.next))}>next</button>
    </div>
  )
}

export default PokeList