import styles from "./Checkout.module.scss";

import Sidebar from "./sections/Sidebar";
import CheckoutProvider from "@/context/checkout";
import { CustomerInfoForm } from "@/features/Forms/BillingDetailsForm";

import { useCartState } from "@/hooks/useCart";

const Checkout = () => {
  const { total } = useCartState();

  return (
    <CheckoutProvider total={total}>
      <section className={`${styles.checkout} container`}>
        <h1 className={styles.title}>Checkout</h1>
        <section className={styles.content}>
          <CustomerInfoForm
            className={styles.details_form}
            id="checkout_form"
          />
          <Sidebar />
        </section>
      </section>
    </CheckoutProvider>
  );
};

export default Checkout;
