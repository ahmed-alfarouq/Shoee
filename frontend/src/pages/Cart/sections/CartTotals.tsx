import { Link } from "react-router-dom";
import { Activity, useState } from "react";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";
import { CouponForm } from "@/features/CouponForm";

import { useCartState } from "@/hooks/useCart";

const CartTotals = () => {
  const { total } = useCartState();
  const [showCouponForm, setShowCouponForm] = useState(false);

  const toggleCouponForm = () => setShowCouponForm(!showCouponForm);

  const handleCouponSubmit = () => console.log("Coupon submited!");

  return (
    <section className={styles.cart_total}>
      <h2 className={styles.title}>Cart Totals</h2>
      <table className={styles.total_table}>
        <tbody>
          <tr className={styles.cart_subtotal}>
            <th scope="row">Subtotal</th>
            <td>
              <span className={styles.amount}>
                <bdi>
                  <span className={styles.currency_symbol}>$</span>
                  {total.toFixed(2)}
                </bdi>
              </span>
            </td>
          </tr>
          <tr className={styles.order_total}>
            <th scope="row">Total</th>
            <td>
              <strong>
                <span className={styles.amount}>
                  <bdi>
                    <span className={styles.currency_symbol}>$</span>
                    {total.toFixed(2)}
                  </bdi>
                </span>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={styles.footer}>
        {!showCouponForm && (
          <Button
            size="sm"
            variant="ghost"
            aria-expanded={showCouponForm ? "true" : "false"}
            onClick={toggleCouponForm}
            aria-controls="coupon-form"
          >
            Have a coupon?
          </Button>
        )}
        <Activity mode={showCouponForm ? "visible" : "hidden"}>
          <CouponForm onSuccess={handleCouponSubmit} />
        </Activity>
        <Button asChild>
          <Link to="/checkout">Proceed to checkout</Link>
        </Button>
      </div>
    </section>
  );
};

export default CartTotals;
