import React from "react";
import { InfoSubmit } from "../../components/InfoSubmit";
export const Success = () => {
  return (
    <div>
      <div className="carrito">
        <h1 className="success-text">
          To compra ha sido un éxito. Por llavor llená este formulario y dejanos
          tus datos para coordinar la entrega:
        </h1>
        <InfoSubmit />
      </div>
    </div>
  );
};
