import React from "react";
import Product from "./Product";
function HairOil({ onAddToCart, onRemoveFromCart }) {
  return (
    <Product
      name="Hair Oil"
      price={122}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
    />
  );
}

export default HairOil;
