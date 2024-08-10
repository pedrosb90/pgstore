import React from "react";
import { useContext } from "react";
import { shopitems } from "../productos/shopitems";
import { Shop_context } from "../../context/shop_context";
import { ItemEnCarrito } from "./ItemEnCarrito";

export const Carrito = () => {
  const { itemsCarrito } = useContext(Shop_context);

  return (
    <div className="carrito">
      <div>
        <h1 className="title">Tu compra: </h1>
      </div>
      <div className="items-compra">
        Items:
        {shopitems.map((producto) => {
          if (itemsCarrito[producto.id] !== 0) {
            return <ItemEnCarrito data={producto} />;
          }
        })}
      </div>
    </div>
  );
};
