// Redux
import { useSelector } from "react-redux";

// Components
import CartContent from "./sections/CartContent";
import CartTotals from "./sections/CartTotals";
import Empty from "./sections/Empty";

import type { RootState } from "@/app/store";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.products.cart);

  return (
    <main className="cart-page">
      <section className="container">
        <h1 className="title">Cart</h1>
        {cart.length ? (
          <div className="content">
            <CartContent />
            <CartTotals />
          </div>
        ) : (
          <Empty />
        )}
      </section>
    </main>
  );
};

export default Cart;
