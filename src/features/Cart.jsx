import React, { forwardRef } from "react";
import CartItem from "../components/Cart/CartItem";

const Cart = forwardRef(({ cartItems }, ref) => {
  return (
    <div className="cart" ref={ref}>
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <div className="no-products">
          <BsExclamationCircleFill />
          <h2>There is no products yet.</h2>
        </div>
      )}
      {cartItems.length ? (
        <Link to="/checkout" onClick={switchCart}>
          check out
        </Link>
      ) : (
        <Link to="/products" onClick={switchCart}>
          Products
        </Link>
      )}
    </div>
  );
});

export default Cart;
