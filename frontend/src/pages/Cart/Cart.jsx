import React from "react";
import CartContent from "./sections/CartContent";
import CartTotals from "./sections/CartTotals";

const Cart = () => {
  return (
    <main className="cart-page">
      <section className="container">
        <h1 className="title">Cart</h1>
        <div className="content">
          <CartContent />
          <CartTotals />
        </div>
      </section>
    </main>
  );
};

export default Cart;
