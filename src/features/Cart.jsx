import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import CartItem from "../components/cart/CartItem";
import Empty from "../components/cart/Empty";

// Icons
import { IoMdClose } from "react-icons/io";

const Cart = forwardRef(({ switchCart }, ref) => {
  const cartItems = useSelector((state) => state.products.products);
  return (
    <div className="cart" ref={ref}>
      <div className="cart-header">
        <span>Shopping Cart</span>
        <IoMdClose onClick={switchCart} />
      </div>
      {cartItems && cartItems.length ? (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <Empty switchCart={switchCart} />
      )}
    </div>
  );
});

export default Cart;
