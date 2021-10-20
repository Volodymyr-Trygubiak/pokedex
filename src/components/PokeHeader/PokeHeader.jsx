import React from 'react'
import './pokeheader.scss'
import logo from "../../assets/pokemon-logo-png-1428.png"
import { useHistory, useLocation } from 'react-router'
import { BsChevronLeft } from "react-icons/bs";
import { LIST_ROUTE } from '../../utils/consts';

const PokeHeader = (props) => {
  const history = useHistory()
  const rootPath = useLocation().pathname
  return (
    <header className="header">
      {rootPath !== LIST_ROUTE && <button className="back-route" onClick={() => history.goBack()} ><BsChevronLeft /> back</button>}
      <img className="logo" src={logo} alt="" />
    </header>
  )
}

export default PokeHeader
