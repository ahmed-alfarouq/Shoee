import type { ChangeEventHandler } from "react";

import styles from "../Checkout.module.scss";

import { useCheckoutDispatch, useCheckoutState } from "@/hooks/useCheckout";

import type { PaymentMethod } from "@/context/checkout/index.types";

const PaymentMethodForm = () => {
  const { total, paymentMethod } = useCheckoutState();
  const dispatch = useCheckoutDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;
    const isCash = paymentMethod === "cash";

    if (isCash) {
      dispatch({
        type: "SET_TOTAL",
        payload: { total: Number((total - 10).toFixed(2)) },
      });
    }

    if (val === "cash") {
      dispatch({
        type: "SET_TOTAL",
        payload: { total: Number((total + 10).toFixed(2)) },
      });
    }

    dispatch({ type: "SET_PAYMENT_METHOD", payload: val as PaymentMethod });
  };

  return (
    <section className={styles.payment_method}>
      <h3 className={styles.title}>Payment Method</h3>
      <div className={styles.payments}>
        <label>
          <input type="radio" name="payment" value="cash" onChange={onChange} />
          Cash on delivery
        </label>
        <label>
          <input
            type="radio"
            name="payment"
            value="stripe"
            onChange={onChange}
          />
          Stripe
        </label>
      </div>
    </section>
  );
};

export default PaymentMethodForm;
