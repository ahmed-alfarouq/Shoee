import React, { useState } from "react";
import { Link } from "react-router-dom";
import CouponForm from "./CouponForm";
import { useSelector } from "react-redux";

const CartTotals = () => {
  const [showCouponForm, setShowCouponForm] = useState(false);

  const cart = useSelector((state) => state.products.cart);

  const toggleCouponForm = () => setShowCouponForm(!showCouponForm);

  const handleCouponSubmit = (values) => console.log(values);

  const totalPrice = cart.reduce(
    (prevValue, product) => prevValue + product.price * product.qty,
    0
  );

  return (
    <div className="cart-totals">
      <h2 className="title">Cart Totals</h2>
      <table className="totals-table">
        <tbody>
          <tr className="cart-subtotal">
            <th scope="row">Subtotal</th>
            <td>
              <span className="amount">
                <bdi>
                  <span className="currency-symbol">$</span>
                  {totalPrice.toFixed(2)}
                </bdi>
              </span>
            </td>
          </tr>
          <tr className="order-total">
            <th scope="row">Total</th>
            <td>
              <strong>
                <span className="amount">
                  <bdi>
                    <span className="currency-symbol">$</span>
                    {totalPrice.toFixed(2)}
                  </bdi>
                </span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="coupon">
        {!showCouponForm && (
          <button
            className="have-coupon-btn"
            aria-expanded={showCouponForm ? "true" : "false"}
            onClick={toggleCouponForm}
            aria-controls="coupon-form"
          >
            Have a coupon?
          </button>
        )}
        {showCouponForm && <CouponForm submit={handleCouponSubmit} />}
      </div>

      <Link to="/checkout" className="btn">
        Proceed to checkout
      </Link>
    </div>
  );
};

export default CartTotals;
