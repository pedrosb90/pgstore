import React from "react";

export const Item = (props) => {
  const { id, nombre, tamaño, precio, imagen } = props.data;

  return (
    <div className="item">
      <h3 className="name">{nombre}</h3>
      <p className="descrip">Tamaño: {tamaño}</p>
      <h2 className="precio">Precio: $ {precio}</h2>
      <img className="imagen" src={imagen} alt="img" />
    </div>
  );
};
