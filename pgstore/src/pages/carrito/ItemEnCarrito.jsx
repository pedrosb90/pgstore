import React from "react";
import { useContext } from "react";
import { Shop_context } from "../../context/shop_context";

export const ItemEnCarrito = (props) => {
  const { id, nombre, tamaño, precio, imagen } = props.data;

  const { itemsCarrito, agregarCarrito, quitarCarrito } =
    useContext(Shop_context);

  const cantidadEnCarrito = itemsCarrito[id];

  const totalPrecioItem = cantidadEnCarrito * precio;

  return (
    <div className="carrito">
      {" "}
      <div className="item-carrito">
        {/* <h2>Cantidad: {cantidadEnCarrito}</h2> */}
        <h3>{nombre}</h3>
        <p> {tamaño}</p>
        <h2>$ {precio}</h2>
        <div className="cuenta">
          <button onClick={() => quitarCarrito(id)}> - </button>
          <input value={cantidadEnCarrito} />
          <button onClick={() => agregarCarrito(id)}> + </button>
        </div>
        <div className="total-item">
          <h2>Sub Total: $ {totalPrecioItem}</h2>
        </div>
      </div>{" "}
    </div>
  );
};
