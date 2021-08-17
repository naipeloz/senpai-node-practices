import React, { useEffect, useState } from "react";

const Select = (props) => {
  const [ciudad, setCiudad] = useState('');

  const handleSubmit =(event)=>{
    event.preventDefault();
    // agregar aca una funcion filter para seleccionar la ciudad??
  }


  return (
    <>
      <form onSubmit={(event)=> handleSubmit (event)}>
      <label>Elegir Ciudad:</label>
      <select  onChange={(event) => setCiudad(event.target.value)}  value={ciudad}>
        {/* Las opciones se podrian traer con un .map??? */}
        <option value=''>-------</option>
        <option value={props.name}>{props.name}</option>
      </select>
      <button type='submit'>Seleccionar</button>
      </form>
    </>
  );
};

export default Select;
