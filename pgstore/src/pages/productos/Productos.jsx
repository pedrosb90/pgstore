import React from "react";
import { shopitems } from "../productos/shopitems";
import { Item } from "../productos/Item";

export const Productos = () => {
  return (
    <div className="container">
      <h1 className="title">Shop</h1>

      <div className="products">
        <div>
          {shopitems.map((producto) => (
            <Item data={producto} />
          ))}
        </div>
      </div>
    </div>
  );
};
