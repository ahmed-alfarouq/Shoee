import styles from "./Checkout.module.scss";

import Sidebar from "./sections/Sidebar";
import { CustomerInfoForm } from "@/features/Forms/BillingDetailsForm";

const Checkout = () => {
  return (
    <section className={`${styles.checkout} container`}>
      <h1 className={styles.title}>Checkout</h1>
      <section className={styles.content}>
        <CustomerInfoForm className={styles.details_form} />
        <Sidebar />
      </section>
    </section>
  );
};

export default Checkout;
