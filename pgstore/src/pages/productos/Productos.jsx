import React from "react";
import { shopitems } from "../productos/shopitems";
import { Item } from "../productos/Item";
import { useNavigate } from "react-router-dom";

export const Productos = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Shop</h1>
      <p className="info">Entregas diarias en Maldonado y Punta del Este</p>
      <p className="info">Miercoles en Montevideo</p>

      <div className="products">
        <div>
          {shopitems.map((producto) => (
            <Item data={producto} />
          ))}
        </div>
      </div>
      <div className="total-check">
        <button onClick={() => navigate("/carrito")} className="btn-out">
          {" "}
          Ver carro de compras{" "}
        </button>
      </div>
    </div>
  );
};
