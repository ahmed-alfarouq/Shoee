import { memo } from "react";

import { Button } from "@/components/Button";

import styles from "../Cart.module.scss";

import { IoIosCart } from "react-icons/io";

import type { CartTogglerProps } from "../Cart.types";

const CartToggler = memo(({ switchCart, itemCount }: CartTogglerProps) => {
  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={switchCart}
      className={styles.cart_toggler}
      aria-label="Open Cart"
    >
      <span className={styles.count}>{itemCount}</span>
      <IoIosCart size="25px" />
    </Button>
  );
});

export default CartToggler;
