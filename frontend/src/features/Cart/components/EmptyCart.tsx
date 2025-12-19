import { memo } from "react";

import { Link } from "react-router-dom";

import styles from "../Cart.module.scss";

import { Button } from "@/components/Button";

import type { EmptyCartProps } from "../Cart.types";

const EmptyCart = memo(({ switchCart }: EmptyCartProps) => {
  return (
    <div className={styles.empty_cart}>
      <p>No products in the cart.</p>
      <Button asChild onClick={switchCart}>
        <Link to="/products">continue shopping</Link>
      </Button>
    </div>
  );
});

export default EmptyCart;
