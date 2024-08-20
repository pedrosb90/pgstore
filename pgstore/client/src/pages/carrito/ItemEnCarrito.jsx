import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/Shop_context";
export const ItemEnCarrito = (props) => {
  const { id, title, description, unit_price } = props.data;

  const { itemsCarrito, agregarCarrito, quitarCarrito, cambiarValorCantidad } =
    useContext(ShopContext);

  const cantidadEnCarrito = itemsCarrito[id];

  const totalPrecioItem = cantidadEnCarrito * unit_price;

  return (
    <div className="carrito">
      {" "}
      <div className="item-carrito">
        {/* <h2>Cantidad: {cantidadEnCarrito}</h2> */}
        <h3>{title}</h3>
        <p> {description}</p>
        <h2>$ {unit_price}</h2>
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
