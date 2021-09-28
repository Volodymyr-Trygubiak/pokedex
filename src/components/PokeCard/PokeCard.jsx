import React from 'react'
import './pokecard.css'

const PokeCard = ({name}) => {

  return (
    <div className='poke-card'>
      {/* <img className='poke' src={image} alt={name} /> */}
      <h4 className='poke-name'>{name}</h4>
      {/* <span className='poke-type'>{type}</span> */}
    </div>
  )
}

export default PokeCard
