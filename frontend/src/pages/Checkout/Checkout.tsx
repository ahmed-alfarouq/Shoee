import styles from "./Checkout.module.scss";

import Sidebar from "./sections/Sidebar";
import Addresses from "./sections/Addresses";

const Checkout = () => {
  return (
    <section className={`${styles.checkout} container`}>
      <h1 className={styles.title}>Checkout</h1>
      <section className={styles.content}>
        <Addresses />
        <Sidebar />
      </section>
    </section>
  );
};

export default Checkout;
