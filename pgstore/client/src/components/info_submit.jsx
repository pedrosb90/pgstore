import React, { useContext, useNavigate } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Shop_context } from "../context/shop_context";

export const Info_submit = () => {
  const { setSubmitContext } = useContext(Shop_context);

  const [state, handleSubmit] = useForm("xwpeqjqg");
  if (state.succeeded) {
    return <p>Gracias. Continúa tu compra</p>;
  }

  return (
    <form
      className="form"
      action="https://formspree.io/f/xwpeqjqg"
      method="POST"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />

      <label htmlFor="telefono">Teléfono</label>
      <input id="telefono" type="tel" name="telefono" required />

      <label htmlFor="direccion">Dirección de envío</label>
      <input id="direccion" type="text" name="direccion" required />

      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Mensaje</label>
      <textarea className="input-area" id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className="form-btn-out"
        type="submit"
        disabled={state.submitting}
      >
        Enviar
      </button>
    </form>
  );
};
