import React from "react";
import { useState, createContext } from "react";
import { shopitems } from "../pages/productos/shopitems";

export const ShopContext = createContext(null);

const defaultCarrito = () => {
  let cart = [];
  for (let i = 0; i < shopitems.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [itemsCarrito, setItemsCarrito] = useState(defaultCarrito());
  const [setInfoSubmitSucceeded] = useState(false);

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
  const setSubmitContext = () => {
    setInfoSubmitSucceeded(true);
  };
  const contextValue = {
    itemsCarrito,
    agregarCarrito,
    quitarCarrito,
    cambiarValorCantidad,
    setSubmitContext,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
