import React from "react";
import Product from "./Product";
function Soap({ onAddToCart, onRemoveFromCart }) {
  return (
    <Product
      name="Soap"
      price={30}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );
}

export default Soap;
