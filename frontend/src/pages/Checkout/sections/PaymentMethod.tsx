import styles from "../Checkout.module.scss";

import type { PaymentMethodProps } from "../Checkout.types";

const PaymentMethod = ({ setMethod }: PaymentMethodProps) => (
  <section className={styles.payment_method}>
    <h3 className={styles.title}>Payment Method</h3>
    <div className={styles.payments}>
      <label>
        <input type="radio" name="payment" value="cash" onChange={setMethod} />
        Cash on delivery
      </label>
      <label>
        <input
          type="radio"
          name="payment"
          value="stripe"
          onChange={setMethod}
        />
        Stripe
      </label>
    </div>
  </section>
);

export default PaymentMethod;
