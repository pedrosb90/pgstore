import React from "react";
import { useState, createContext } from "react";
import { Productos } from "../pages/productos/Productos";

export const Shop_context = createContext(null);

const defaultCarrito = () => {
  let cart = {};
  for (let i = 1; i < Productos.length; i++) {
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

  return <Shop_context.Provider>{props.children}</Shop_context.Provider>;
};
