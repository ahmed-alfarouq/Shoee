import React from "react";
import BlurImage from "../../../components/BlurImage";

const OrderSummary = ({ cart }) => {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  return (
    <div className="order-summary">
      <h3 className="title">Order Summary</h3>
      {cart.map((product) => (
        <div key={product.id} className="product-summary">
          <BlurImage
            src={product.thumbnail}
            placeholder="https://placehold.co/300x300"
            alt={product.title}
            className="thumbnail"
          />
          <div className="product-details">
            <p>
              {product.title} x {product.qty}
            </p>
          </div>
        </div>
      ))}
      <div className="total">
        <h4>Total: £{total.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default OrderSummary;
