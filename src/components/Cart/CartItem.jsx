import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../../app/features/products/productsSlice";

// Components
import IncrementDecrementCounter from "../IncrementDecrementCounter";

// Assets
import { IoCloseCircleOutline } from "react-icons/io5";

// Utils
import truncate from "../../utils/truncate";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increment = () => dispatch(incrementCartItem(item.id));
  const decrement = () => dispatch(decrementCartItem(item.id));

  return (
    <li className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      <div className="content">
        <span className="title">{truncate(item.title, 4)}</span>
        <IncrementDecrementCounter
          count={item.qty}
          increment={increment}
          decrement={decrement}
        />
        <div className="price">
          <bdi>
            <span className="currency-symbol">$</span>
            {(item.qty * item.price).toFixed(2)}
          </bdi>
        </div>
      </div>

      <IoCloseCircleOutline
        className="remove"
        onClick={() => dispatch(removeFromCart(item.id))}
      />
    </li>
  );
};

export default CartItem;
