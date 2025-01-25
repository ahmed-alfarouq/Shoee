import React, { forwardRef } from "react";
import { useSelector } from "react-redux";

// Components
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import CartFooter from "./CartFooter";

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
        <span>Shopping Cart</span>
        <IoMdClose onClick={switchCart} />
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
