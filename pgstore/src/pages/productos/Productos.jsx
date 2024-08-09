import React from "react";
import { shopitems } from "../productos/shopitems";
import { Item } from "../productos/Item";

export const Productos = () => {
  return (
    <div className="productos">
      <div
        className="nombre-ti
      enda"
      >
        <h1>Punta Goods Shop</h1>
        <div className="productos-items">
          {shopitems.map((producto) => (
            <Item data={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};
