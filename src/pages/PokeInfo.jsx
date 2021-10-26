import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../store/redusers/pokemonsReduser";
import { clearInfo } from "../store/redusers/pokemonInfoReduser";
import { useEffect } from "react";
import { fetchPokemonInfo } from "../asyncActions/pokemonInfo";

const PokeInfo = (props) => {
  const params = useParams();
  const dispatch = useDispatch()
  const { pokemonInfo: pokemon } = useSelector(state => state.pokemonInfo)

  const hashId = id => {
    if (id < 10) {
      return `00${id}`
    }
    if (id < 100) {
      return `0${id}`
    }
    return id
  }


  useEffect(() => {
    dispatch(fetchPokemonInfo(params.id))

    return () => {
      dispatch(clear())
      dispatch(clearInfo())
    }
  }, [dispatch, params.id])

  console.log(pokemon);


  return (
    <div className="poke-info">
      <img className="poke-img" src={pokemon.img} alt={pokemon.name} />
      <div className="poke-wrap">
        <h2 className="poke-title">{pokemon.name} <span>#{hashId(pokemon.id)}</span></h2>
        <ul className="poke-list">
          <li className="poke-item">Type <span className="poke-param">{pokemon.type}</span></li>
          <li className="poke-item">Attack <span className="poke-param">{pokemon.attack}</span></li>
          <li className="poke-item">Defense <span className="poke-param">{pokemon.defence}</span></li>
          <li className="poke-item">HP <span className="poke-param">{pokemon.hp}</span></li>
          <li className="poke-item">SP Attack <span className="poke-param">{pokemon.sPAttack}</span></li>
          <li className="poke-item">SP Defense <span className="poke-param">{pokemon.sPDefense}</span></li>
          <li className="poke-item">Speed <span className="poke-param">{pokemon.speed}</span></li>
          <li className="poke-item">Weight <span className="poke-param">{pokemon.weight}</span></li>
          <li className="poke-item">Total moves <span className="poke-param">{pokemon.totalMoves}</span></li>
        </ul>
      </div>
    </div>
  )
}

export default PokeInfo