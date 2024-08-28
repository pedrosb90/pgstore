import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const Item = (props) => {
  const { id, title, description, unit_price, imagen } = props.data;

  const { agregarCarrito, itemsCarrito } = useContext(ShopContext);

  const cantidadEnCarrito = itemsCarrito[id];

  return (
    <div className="item">
      <div className="description">
        {" "}
        <h3 className="name">{title}</h3>
        <p className="tamaño">Tamaño: {description}</p>
        <h2 className="precio">Precio: $ {unit_price}</h2>
        <button className="btn" onClick={() => agregarCarrito(id)}>
          Agregar {cantidadEnCarrito > 0 && <> ({cantidadEnCarrito})</>}
        </button>
      </div>

      <img className="imagen" src={imagen} alt="img" />
    </div>
  );
};
