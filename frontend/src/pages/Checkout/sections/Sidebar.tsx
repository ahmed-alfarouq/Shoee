import styles from "../Checkout.module.scss";

import Total from "./Total";
import OrderSummary from "./OrderSummary";
import { Button } from "@/components/Button";
import { CouponForm } from "@/features/CouponForm";
import PaymentMethodForm from "./PaymentMethodForm";

import { useCheckoutDispatch, useCheckoutState } from "@/hooks/useCheckout";

const Sidebar = () => {
  const { total, discount } = useCheckoutState();
  const dispatch = useCheckoutDispatch();

  const applyCoupon = (d: number) => {
    if (discount) return;

    const afterDiscount = Number((total - (total * d) / 100).toFixed(2));

    dispatch({
      type: "SET_TOTAL",
      payload: { total: afterDiscount, discount: d },
    });
  };

  return (
    <aside className={styles.asidebar}>
      <OrderSummary />
      <CouponForm className={styles.coupon_form} onSuccess={applyCoupon} />
      <PaymentMethodForm />
      <Total />
      <Button className={styles.place_order} type="submit" form="checkout_form">
        Place order
      </Button>
    </aside>
  );
};

export default Sidebar;
