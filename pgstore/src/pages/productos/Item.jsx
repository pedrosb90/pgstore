import React from "react";
import { useContext } from "react";
import { Shop_context } from "../../context/shop_context";

export const Item = (props) => {
  const { id, nombre, tamaño, precio, imagen } = props.data;

  const { agregarCarrito, itemsCarrito } = useContext(Shop_context);

  const cantidadEnCarrito = itemsCarrito[id];

  return (
    <div className="item">
      <div className="description">
        {" "}
        <h3 className="name">{nombre}</h3>
        <p className="tamaño">Tamaño: {tamaño}</p>
        <h2 className="precio">Precio: $ {precio}</h2>
        <button className="btn" onClick={() => agregarCarrito(id)}>
          Agregar {cantidadEnCarrito > 0 && <> ({cantidadEnCarrito})</>}
        </button>
      </div>

      <img className="imagen" src={imagen} alt="img" />
    </div>
  );
};
