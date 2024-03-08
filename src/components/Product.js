import React from "react";

function Product({ product, onAddToCart, onRemoveFromCart }) {
  const handleAddToCart = () => {
    onAddToCart(product); // Pass the entire product object
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(product.name); // Pass only the product name for removal
  };

  return (
    <div className="product-box">
      <h4>name: {product.name}</h4>
      <h4>price: {product.price}</h4>
      <button className="add-to-cart btn" onClick={handleAddToCart}>
        Add to Cart
      </button>
      <button className="remove-from-cart btn" onClick={handleRemoveFromCart}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Product;
