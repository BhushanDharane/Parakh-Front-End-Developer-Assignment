import React from "react";
import Product from "./Product";
function Shampoo({ onAddToCart, onRemoveFromCart }) {
  return (
    <Product
      name="Shampoo"
      price={50}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );
}

export default Shampoo;
