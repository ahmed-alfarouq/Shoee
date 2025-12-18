import { useMemo } from "react";
import truncate from "lodash/truncate";

import styles from "../Checkout.module.scss";

import { Image } from "@/features/Image";

import { useCartState } from "@/hooks/useCart";

const OrderSummary = () => {
  const { items } = useCartState();

  const subtotal = useMemo(
    () => items.reduce((sum, product) => sum + product.price * product.qty, 0),
    [items]
  );

  return (
    <section className={styles.order_summary}>
      <h3 className={styles.title}>Order Summary</h3>
      {items.map((product) => (
        <div key={product.id} className={styles.product_summary}>
          <Image
            alt={product.title}
            src={product.thumbnail}
            className={styles.thumbnail}
            placeholder="https://placehold.co/300x300"
          />
          <div className={styles.product_details}>
            <p>
              {truncate(product.title, { length: 20 })} x {product.qty}
            </p>
          </div>
        </div>
      ))}

      <strong>Subtotal: ${subtotal.toFixed(2)}</strong>
    </section>
  );
};

export default OrderSummary;
