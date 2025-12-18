import { useCheckoutActions, useCheckoutState } from "@/stores/checkout";

import styles from "../Checkout.module.scss";

import type { ChangeEventHandler } from "react";
import type { PaymentMethod } from "@/context/checkout/index.types";

const PaymentMethodForm = () => {
  const { paymentMethod } = useCheckoutState();
  const { setPaymentMethod } = useCheckoutActions();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value as PaymentMethod;
    setPaymentMethod(val);
  };

  return (
    <section className={styles.payment_method}>
      <h3 className={styles.title}>Payment Method</h3>
      <div className={styles.payments}>
        <label>
          <input
            value="cash"
            type="radio"
            name="payment"
            onChange={onChange}
            defaultChecked={paymentMethod === "cash"}
          />
          Cash on delivery
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="stripe"
            onChange={onChange}
            defaultChecked={paymentMethod === "stripe"}
          />
          Stripe
        </label>
      </div>
    </section>
  );
};

export default PaymentMethodForm;
