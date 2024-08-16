import React from "react";
import { useState, createContext } from "react";
import { shopitems } from "../pages/productos/shopitems";

export const Shop_context = createContext(null);

const defaultCarrito = () => {
  let cart = [];
  for (let i = 0; i < shopitems.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const Shop_context_provider = (props) => {
  const [itemsCarrito, setItemsCarrito] = useState(defaultCarrito());

  const agregarCarrito = (id) => {
    setItemsCarrito((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };
  const quitarCarrito = (id) => {
    setItemsCarrito((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const cambiarValorCantidad = (nuevaCuenta, id) => {
    setItemsCarrito((prev) => {
      return {
        ...prev,
        [id]: nuevaCuenta,
      };
    });
  };

  const contextValue = {
    itemsCarrito,
    agregarCarrito,
    quitarCarrito,
    cambiarValorCantidad,
  };

  return (
    <Shop_context.Provider value={contextValue}>
      {props.children}
    </Shop_context.Provider>
  );
};
