import React from "react";
import { useContext } from "react";
import { Shop_context } from "../../context/shop_context";

export const ItemEnCarrito = (props) => {
  const { id, nombre, tamaño, precio, imagen } = props.data;

  const { itemsCarrito, agregarCarrito, quitarCarrito, cambiarValorCantidad } =
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
          <button className="cantidad-btn" onClick={() => quitarCarrito(id)}>
            {" "}
            -{" "}
          </button>
          <input
            className="cantidad"
            value={cantidadEnCarrito}
            onChange={(e) => cambiarValorCantidad(Number(e.target.value), id)}
          />
          <button className="cantidad-btn" onClick={() => agregarCarrito(id)}>
            {" "}
            +{" "}
          </button>
        </div>
        <div className="total-item">
          <h4>Sub Total: $ {totalPrecioItem}</h4>
        </div>
      </div>{" "}
    </div>
  );
};
