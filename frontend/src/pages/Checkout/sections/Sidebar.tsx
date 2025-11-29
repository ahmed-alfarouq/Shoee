import { useState, type ChangeEventHandler } from "react";

import styles from "../Checkout.module.scss";

import Total from "./Total";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import { Button } from "@/components/Button";
import { CouponForm } from "@/features/CouponForm";

import { useCartState } from "@/hooks/useCart";

const Sidebar = () => {
  const { total } = useCartState();

  const [method, setMethod] = useState("");
  const [isCash, setIsCash] = useState(false);
  const [subTotal, setSubTotal] = useState(total);
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (d: number) => {
    const afterDiscount = Number((total - (total * d) / 100).toFixed(2));
    setDiscount(d);
    setSubTotal(afterDiscount + (isCash ? 10 : 0));
  };

  const updateMethod: ChangeEventHandler<HTMLInputElement> = (e) => {
    const val = e.target.value;

    if (val === "cash") {
      setIsCash(true);
      setSubTotal((prev) => Number((prev + 10).toFixed(2)));
      return;
    }

    if (isCash) {
      setIsCash(false);
      setSubTotal((prev) => Number((prev - 10).toFixed(2)));
    }

    setMethod(val);
  };

  return (
    <aside className={styles.asidebar}>
      <OrderSummary />
      <CouponForm className={styles.coupon_form} onSuccess={applyCoupon} />
      <PaymentMethod setMethod={updateMethod} />
      <Total total={subTotal} cash={isCash} discount={discount} />
      <Button className={styles.place_order}>Place order</Button>
    </aside>
  );
};

export default Sidebar;
