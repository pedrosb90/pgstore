import React from "react";
import { useContext } from "react";
import { shopitems } from "../productos/shopitems";
import { Shop_context } from "../../context/shop_context";
import { ItemEnCarrito } from "./ItemEnCarrito";
import { useNavigate } from "react-router-dom";

export const Carrito = () => {
  const { itemsCarrito } = useContext(Shop_context);

  const totalCheck = shopitems.reduce((acc, item) => {
    const itemCantidad = itemsCarrito[item.id] || 0;
    return acc + itemCantidad * item.precio;
  }, 0);

  const navigate = useNavigate();

  return (
    <div className="carrito">
      <div>
        <h1 className="title">Tu compra: </h1>
      </div>
      <div className="items-compra">
        {shopitems.map((producto) => {
          if (itemsCarrito[producto.id] !== 0) {
            return <ItemEnCarrito data={producto} />;
          }
        })}
      </div>

      <div className="total-check">
        <h1>Total a pagar: $ {totalCheck}</h1>
        <button onClick={() => navigate("/")} className="btn-out">
          {" "}
          Seguir comprando
        </button>
        <button className="btn-out">Pagar</button>
      </div>
    </div>
  );
};
