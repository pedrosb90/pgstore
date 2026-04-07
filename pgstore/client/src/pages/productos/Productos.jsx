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
        Entrego los MIERCOLES en departamento de Maldonado.
      </p>
      <p className="info">Pago por TRANSFERENCIA: Pedir por Whatsapp'</p>
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
