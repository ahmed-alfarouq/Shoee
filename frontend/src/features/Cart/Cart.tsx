import { useCallback, useState } from "react";

import styles from "./Cart.module.scss";

import { Button } from "@/components/Button";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import CartFooter from "./components/CartFooter";
import CartToggler from "./components/CartToggler";

import { IoMdClose } from "react-icons/io";

import type { ProductProps } from "@/types/index.types";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartItems: ProductProps[] = [];
  const subtotal = 0;

  const switchCart = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div className={styles.cart_container}>
      <CartToggler switchCart={switchCart} itemCount={cartItems.length} />
      <aside className={`${styles.cart} ${isOpen && styles.open}`}>
        <div className={styles.cart_header}>
          <span aria-hidden="true">Shopping Cart</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={switchCart}
            aria-label="close cart"
          >
            <IoMdClose />
          </Button>
        </div>
        {cartItems.length ? (
          <>
            <ul className={styles.cart_items}>
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <CartFooter subtotal={subtotal} switchCart={switchCart} />
          </>
        ) : (
          <EmptyCart switchCart={switchCart} />
        )}
      </aside>
    </div>
  );
};

export default Cart;
