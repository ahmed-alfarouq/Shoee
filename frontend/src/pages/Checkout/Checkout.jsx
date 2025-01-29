import React from "react";
import { useSelector } from "react-redux";

// Components
import OrderSummary from "./sections/OrderSummary";
import PaymentMethod from "./sections/PaymentMethod";
import CustomerInfo from "./sections/CustomerInfo";

const Checkout = () => {
  const cart = useSelector((state) => state.products.cart);
  const applyCoupon = (e) => {
    e.preventDefault();
    console.log("coupon");
  };

  return (
    <main className="checkout">
      <section className="container">
        <h1 className="title">Checkout</h1>
        <div className="content">
          <div className="left-section">
            <CustomerInfo />
            <PaymentMethod />
            <form className="coupon" onSubmit={applyCoupon}>
              <input type="text" placeholder="Coupon code" />
              <button type="submit" className="btn">
                Apply Coupon
              </button>
            </form>
            <button className="btn">Complete Checkout</button>
          </div>
          <OrderSummary cart={cart} />
        </div>
      </section>
    </main>
  );
};

export default Checkout;
