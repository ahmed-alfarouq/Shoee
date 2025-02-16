import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

// Components
import CartItem from "./sections/CartItem";
import EmptyCart from "./sections/EmptyCart";
import CartFooter from "./sections/CartFooter";

// Icons
import { IoMdClose } from "react-icons/io";

const Cart = forwardRef(({ switchCart }, ref) => {
  const cartItems = useSelector((state) => state.products.cart);

  const subtotal = cartItems.reduce((accumulator, product) => {
    return accumulator + product.price * product.qty;
  }, 0);

  return (
    <div className="cart" ref={ref}>
      <div className="cart-header">
        <span aria-hidden="true">Shopping Cart</span>
        <button onClick={switchCart} aria-label="close side cart">
          <IoMdClose />
        </button>
      </div>
      {cartItems && cartItems.length ? (
        <>
          <ul className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          <CartFooter subtotal={subtotal} switchCart={switchCart} />
        </>
      ) : (
        <EmptyCart switchCart={switchCart} />
      )}
    </div>
  );
});

export default Cart;
