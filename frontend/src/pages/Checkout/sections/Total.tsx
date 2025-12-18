import { useMemo } from "react";
import styles from "../Checkout.module.scss";

import { useCartState } from "@/hooks/useCart";
import { useCheckoutState } from "@/stores/checkout";

const Total = () => {
  const { items } = useCartState();
  const { discount, paymentMethod } = useCheckoutState();

  const total = useMemo(() => {
    const subtotal = items.reduce((PV, CV) => CV.price * CV.qty + PV, 0);

    if (discount) {
      return subtotal - (discount / 100) * subtotal;
    }

    return subtotal;
  }, [discount, items]);

  return (
    <div className={styles.total}>
      <strong className={styles.price}>Total: ${total}</strong>
      {paymentMethod === "cash" && (
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
