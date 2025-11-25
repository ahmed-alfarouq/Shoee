import styles from "../Checkout.module.scss";

import type { TotalProps } from "../Checkout.types";

const Total = ({ total, cash, amount = 10, discount = 0 }: TotalProps) => {
  return (
    <div className={styles.total}>
      <strong className={styles.price}>Total: ${total}</strong>
      {cash && (
        <span className={styles.note}>
          A ${amount} fee applies for cash on delivery.
        </span>
      )}

      {discount > 0 && (
        <span className={styles.note}>A {discount}% discount applied.</span>
      )}
    </div>
  );
};

export default Total;
