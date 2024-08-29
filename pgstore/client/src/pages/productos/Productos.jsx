import React from "react";
import { shopitems } from "./shopitems";
import { Item } from "./Item";
import { useNavigate } from "react-router-dom";

export const Productos = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">Shop</h1>
      <p className="info">Entregas diarias en Maldonado y Punta del Este</p>
      <p className="info">Miercoles en Montevideo</p>

      <div className="item-container">
        {shopitems.map((producto) => (
          <Item data={producto} />
        ))}
      </div>
      <div className="irCarro-btn">
        <button onClick={() => navigate("/carrito")} className="btn-out">
          {" "}
          Ir a carro de compras{" "}
        </button>
      </div>
    </div>
  );
};
