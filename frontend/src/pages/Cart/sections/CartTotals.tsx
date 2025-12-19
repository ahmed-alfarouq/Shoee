import { Link } from "react-router-dom";
import { useCartState } from "@/stores/cart";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";

const CartTotals = () => {
  const { total } = useCartState();

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
        </tbody>
      </table>

      <div className={styles.footer}>
        <Button asChild>
          <Link to="/checkout">Proceed to checkout</Link>
        </Button>
      </div>
    </section>
  );
};

export default CartTotals;
