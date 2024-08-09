import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export const Navbar = () => {
  return (
    <div className="Nav-header">
      navbar
      <div className="Links">
        <Link to="/">Productos</Link>
        <Link to="/carrito">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
