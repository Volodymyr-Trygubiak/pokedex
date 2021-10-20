import React from 'react'
import './pokecard.scss'

const PokeCard = ({ name, type, image, onClick }) => {
  const pokeType = `poke-card ${type}`

  return (
    <div className={pokeType} onClick={onClick}>
      <img className='poke-image' src={image} alt={name} />
      <h4 className='poke-name'>{name}</h4>
      <span className='poke-type'>{type}</span>
    </div>
  )
}

export default PokeCard
