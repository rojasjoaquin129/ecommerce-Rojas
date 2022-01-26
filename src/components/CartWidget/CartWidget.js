import React from "react";
import "./CartWidget.css";

import cartSVG from "./carrito.svg";
const CartWidget = () => {
  return <img className="cart-icon" src={cartSVG} alt="" />;
};

export default CartWidget;
