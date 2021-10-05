import React from 'react'
import './pokeBtn.css';

const PokeBtn = ({children, type='button', onClick, disabled}) => {
  return (
    <button className='button'  type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export default PokeBtn
