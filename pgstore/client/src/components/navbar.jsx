import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import pglogo from "../assets/pg_logo-transp.png";

export const Navbar = () => {
  return (
    <div className="Nav-header">
      <img alt="img" className="Logo" src={pglogo} />
      <div className="Links">
        <Link to="/">Productos</Link>
        <Link to="/carrito">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
