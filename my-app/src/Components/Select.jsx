import React from "react";

const Select = () => {


    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={(e) => {
      onChange(e)
      handleChange(e) <- call handleChange
    }}
    value={value ? value : ""}
    name={name}


  return (
    <>
      <select name="ciudad" 
      labelId="Ciudad"
      onChange={(e) => {
        onChange(e)
        handleChange (e)

      }}
      >
        <option className="coloraz font-bold"></option>
        <option className="coloraz font-bold" value="1/2BPCsinAdicional">
          Valor de Opcion
        </option>
      </select>
    </>
  );
};

export default Select;


