import React from "react";
import { Link } from "react-router-dom";

const CartFooter = ({ subtotal }) => {
  return (
    <div className="cart-footer">
      <p className="total">
        <strong>Subtotal:</strong>
        <span className="amount">
          <bdi>
            <span className="currency-symbol">$</span>
            {subtotal.toFixed(2)}
          </bdi>
        </span>
      </p>
      <div className="buttons">
        <Link to="/cart" className="btn">
          View cart
        </Link>
        <Link to="/checkout" className="btn">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartFooter;
