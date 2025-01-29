import React from "react";

const PaymentMethod = () => (
  <div className="payment-method">
    <h3 className="title">Payment Method</h3>
    <div className="payments">
      <label>
        <input type="radio" name="payment" value="credit-card" />
        Cash on delivery
      </label>
      <label>
        <input type="radio" name="payment" value="credit-card" />
        Credit Card
      </label>
      <label>
        <input type="radio" name="payment" value="paypal" />
        PayPal
      </label>
    </div>
  </div>
);

export default PaymentMethod;
