import React from "react";
import { shopitems } from "./shopitems";
import { Item } from "./Item";
import { useNavigate } from "react-router-dom";

export const Productos = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <br />
      <h1 className="title">PePéPe</h1>

      <p className="info">
        Entrego personalmente MARTES y JUEVES en Maldonado y Punta del Este.
      </p>
      <p className="info">MERCADOPAGO o Transferencia</p>

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
