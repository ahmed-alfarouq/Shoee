import { Link } from "react-router-dom";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";

import type { CartFooterProps } from "../Cart.types";

const CartFooter = ({ switchCart, subtotal }: CartFooterProps) => {
  return (
    <div className={styles.cart_footer}>
      <p className={styles.total}>
        <strong>Total:</strong>
        <span>
          <bdi>
            <span className={styles.currency_symbol}>$</span>
            {subtotal.toFixed(2)}
          </bdi>
        </span>
      </p>
      <div className={styles.buttons}>
        <Button asChild size="lg" onClick={switchCart}>
          <Link to="/cart">View Cart</Link>
        </Button>
        <Button asChild size="lg" onClick={switchCart}>
          <Link to="/checkout">Checkout</Link>
        </Button>
      </div>
    </div>
  );
};

export default CartFooter;
