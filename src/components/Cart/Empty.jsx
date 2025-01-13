import React from "react";
import { Link } from "react-router-dom";

const Empty = ({ switchCart }) => {
  return (
    <div className="empty-cart">
      <p>No products in the cart.</p>
      <Link to="/shop" onClick={switchCart} className="btn">
        continue shopping
      </Link>
    </div>
  );
};

export default Empty;
