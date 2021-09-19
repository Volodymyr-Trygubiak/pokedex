import React from "react";
import { useParams } from "react-router-dom";

const PokeInfo = () => {
  const params = useParams();
  
  return (
    <div>PokeInfo page = {params.id}</div>
  )
}

export default PokeInfo