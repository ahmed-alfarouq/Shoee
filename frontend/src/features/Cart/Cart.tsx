import { useCartState } from "@/stores/cart";
import { useCallback, useMemo, useState } from "react";

import styles from "./Cart.module.scss";

import { Button } from "@/components/Button";
import CartItem from "./components/CartItem";
import EmptyCart from "./components/EmptyCart";
import CartFooter from "./components/CartFooter";
import CartToggler from "./components/CartToggler";

import { IoMdClose } from "react-icons/io";

const Cart = () => {
  const { items, total } = useCartState();

  const [isOpen, setIsOpen] = useState(false);

  const switchCart = useCallback(() => setIsOpen((prev) => !prev), []);

  const itemsCount = useMemo(
    () => items.reduce((PV, CV) => PV + CV.qty, 0),
    [items]
  );

  return (
    <div className={styles.cart_container}>
      <CartToggler switchCart={switchCart} itemCount={itemsCount} />
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
        {items.length ? (
          <>
            <ul className={styles.cart_items}>
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <CartFooter subtotal={total} switchCart={switchCart} />
          </>
        ) : (
          <EmptyCart switchCart={switchCart} />
        )}
      </aside>
    </div>
  );
};

export default Cart;
