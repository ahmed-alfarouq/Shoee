import { useCartState } from "@/stores/cart";

import styles from "./Cart.module.scss";

import CartTotals from "./sections/CartTotals";
import { EmptyCart } from "@/features/EmptyCart";

import { ProductsTable } from "@/features/ProductsTable";

const Cart = () => {
  const { items } = useCartState();

  return (
    <section className={styles.cart_page}>
      <div className="container">
        <h1 className={styles.title}>Cart</h1>
        {items.length ? (
          <div className={styles.content}>
            <ProductsTable products={items} />
            <CartTotals />
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
};

export default Cart;
