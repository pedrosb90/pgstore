import React from "react";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { shopitems } from "../productos/shopitems";
import { ShopContext } from "../../context/ShopContext";
import { ItemEnCarrito } from "./ItemEnCarrito";
import { useNavigate } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";

// const key = process.env.REACT_APP_YOUR_PUBLIC_KEY;
const key = "APP_USR-c45cff90-4d26-4a1a-85c8-7cdb5712f7cb";
const vercelbackURL = "https://back-pgstore.vercel.app";
// const vercelbackURL = "https://localhost:3001";

export const Carrito = () => {
  const { itemsCarrito } = useContext(ShopContext);
  const [preferenceId, setPreferenceId] = useState(null);
  const [walletVisible, setWalletVisible] = useState(null);

  useEffect(() => {
    initMercadoPago(key, {
      locale: "es-UY",
    });
    setPreferenceId(null);
  }, []);
  console.log("Public Key:", process.env.REACT_APP_YOUR_PUBLIC_KEY);

  const totalCheck = shopitems.reduce((acc, item) => {
    const itemCantidad = itemsCarrito[item.id] || 0;
    return acc + itemCantidad * item.unit_price;
  }, 0);

  const navigate = useNavigate();

  const sendCartDataToServer = async () => {
    try {
      const items = Object.keys(itemsCarrito)
        .filter((id) => itemsCarrito[id] > 0)
        .map((id) => {
          const item = shopitems.find((item) => item.id === id);
          return {
            id: item.id,
            title: item.title,
            unit_price: item.unit_price,
            description: item.description,
            quantity: itemsCarrito[item.id],
            currency_id: "UYU",
          };
        });
      const response = await axios.post(`${vercelbackURL}/crear-preferencia`, {
        items,
      });
      const { preferenceId } = response.data;
      return preferenceId;
    } catch (error) {
      throw error;
    }
  };
  const handleMercado = async () => {
    try {
      const response = await sendCartDataToServer();
      console.log("Server response:", response);

      const id = response;
      if (id) {
        setPreferenceId(id);
      }
    } catch (error) {
      console.error("Error in handleMercado:", error);
    }
  };

  const handleCheckout = async () => {
    handleMercado();
    setWalletVisible(true);
  };

  return (
    <div className="carrito">
      <div>
        <h1 className="title">Tu compra: </h1>
      </div>
      <div className="items-compra">
        {shopitems.map((producto) => {
          if (itemsCarrito[producto.id] !== 0) {
            return <ItemEnCarrito key={producto.id} data={producto} />;
          }
          return null;
        })}
      </div>
      {totalCheck > 0 ? (
        <div className="total-check">
          <h1>Total a pagar: $ {totalCheck}</h1>
          {preferenceId ? (
            <Wallet
              initialization={{ preferenceId }}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          ) : null}
          <button onClick={() => navigate("/")} className="btn-out">
            {" "}
            Volver{" "}
          </button>
          {!walletVisible ? (
            <button onClick={handleCheckout} className="btn-out">
              Pagar
            </button>
          ) : null}
        </div>
      ) : (
        <div className="total-check">
          <h1>Tu carro está vacío</h1>
          <button onClick={() => navigate("/")} className="btn-out">
            Ver Productos
          </button>
        </div>
      )}
    </div>
  );
};
