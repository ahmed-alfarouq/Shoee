import styles from "../Checkout.module.scss";

import { useCheckoutState } from "@/hooks/useCheckout";

const Total = () => {
  const { total, discount, paymentMethod } = useCheckoutState();
  const isCash = paymentMethod === "cash";

  return (
    <div className={styles.total}>
      <strong className={styles.price}>Total: ${total}</strong>
      {isCash && (
        <span className={styles.note}>
          A $10 fee applies for cash on delivery.
        </span>
      )}

      {discount && (
        <span className={styles.note}>A {discount}% discount applied.</span>
      )}
    </div>
  );
};

export default Total;
