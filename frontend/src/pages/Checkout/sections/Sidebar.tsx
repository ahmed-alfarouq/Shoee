import styles from "../Checkout.module.scss";

import Total from "./Total";
import OrderSummary from "./OrderSummary";
import { Button } from "@/components/Button";
import { CouponForm } from "@/features/CouponForm";
import PaymentMethodForm from "./PaymentMethodForm";

const Sidebar = () => {
  return (
    <aside className={styles.asidebar}>
      <OrderSummary />
      <CouponForm className={styles.coupon_form} />
      <PaymentMethodForm />
      <Total />
      <Button className={styles.place_order} type="submit" form="checkout_form">
        Place order
      </Button>
    </aside>
  );
};

export default Sidebar;
