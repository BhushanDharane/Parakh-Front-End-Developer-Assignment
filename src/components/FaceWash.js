import React from "react";
import Product from "./Product";
function FaceWash({ onAddToCart, onRemoveFromCart }) {
  return (
    <div>
      <Product
        name=" Face Wash"
        price={123}
        onAddToCart={onAddToCart}
        onRemoveFromCart={onRemoveFromCart}
      />
    </div>
  );
}

export default FaceWash;
