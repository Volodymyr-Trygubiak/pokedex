import React from 'react'
import './pokecard.css'

const PokeCard = ({id, name, type, image }) => {
  const pokeType = `poke-card ${type}`

  return (
    <div className={pokeType}>
      <p>{id}</p>
      <img className='poke-image' src={image} alt={name} />
      <h4 className='poke-name'>{name}</h4>
      <span className='poke-type'>{type}</span>
    </div>
  )
}

export default PokeCard
