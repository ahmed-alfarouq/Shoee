import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Empty = () => (
  <div className="empty-cart">
    <IoCartOutline className="cart-icon" />
    <h2>Your Cart is Empty</h2>
    <p>Looks like you haven't added anything to your cart yet.</p>
    <Link to="/products" className="btn">
      Explore Products
    </Link>
  </div>
);

export default Empty;
