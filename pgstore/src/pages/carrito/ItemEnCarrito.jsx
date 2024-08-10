import React from "react";
import { useContext } from "react";
import { Shop_context } from "../../context/shop_context";

export const ItemEnCarrito = (props) => {
  const { id, nombre, tamaño, precio, imagen } = props.data;
  const { itemsCarrito } = useContext(Shop_context);

  const cantidadEnCarrito = itemsCarrito[id];

  return (
    <div className="item-en-carrito">
      <h2>Cantidad: {cantidadEnCarrito}</h2>

      <h3>{nombre}</h3>
      <p> {tamaño}</p>
      <h2>$ {precio}</h2>
    </div>
  );
};
