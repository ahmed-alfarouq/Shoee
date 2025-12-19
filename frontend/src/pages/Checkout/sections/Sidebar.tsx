import styles from "../Checkout.module.scss";

import Total from "./Total";
import OrderSummary from "./OrderSummary";
import PlaceOrderButton from "./PlaceOrderButton";
import { CouponForm } from "@/features/CouponForm";
import PaymentMethodForm from "./PaymentMethodForm";

const Sidebar = () => {
  return (
    <aside className={styles.asidebar}>
      <OrderSummary />
      <CouponForm className={styles.coupon_form} />
      <PaymentMethodForm />
      <Total />
      <PlaceOrderButton />
    </aside>
  );
};

export default Sidebar;
