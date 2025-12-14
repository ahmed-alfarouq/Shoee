import styles from "./Checkout.module.scss";

import Sidebar from "./sections/Sidebar";
import CheckoutProvider from "@/context/checkout";

import { useCartState } from "@/hooks/useCart";

const Checkout = () => {
  const { total } = useCartState();

  return (
    <CheckoutProvider total={total}>
      <section className={`${styles.checkout} container`}>
        <h1 className={styles.title}>Checkout</h1>
        <section className={styles.content}>
          <Sidebar />
        </section>
      </section>
    </CheckoutProvider>
  );
};

export default Checkout;
