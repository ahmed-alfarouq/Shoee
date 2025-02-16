import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../../../app/features/products/productsSlice";

// Components
import IncrementDecrementCounter from "../../../components/IncrementDecrementCounter";

// Assets
import { IoCloseCircleOutline } from "react-icons/io5";

// Utils
import truncate from "../../../utils/truncate";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const increment = useCallback(() => dispatch(incrementCartItem(item.id)), []);
  const decrement = useCallback(() => dispatch(decrementCartItem(item.id)), []);
  const removeItem = () => dispatch(removeFromCart(item.id));

  const truncatedTitle = useMemo(() => truncate(item.title, 4), [item.title]);
  return (
    <li className="cart-item">
      <img src={item.thumbnail} alt={item.title} role="presentation" />
      <div className="content">
        <span className="title">{truncatedTitle}</span>
        <IncrementDecrementCounter
          count={item.qty}
          increment={increment}
          decrement={decrement}
        />
        <div className="price" aria-live="assertive">
          <bdi>
            <span className="currency-symbol">$</span>
            {(item.qty * item.price).toFixed(2)}
          </bdi>
        </div>
      </div>
      <button
        className="icon remove"
        onClick={removeItem}
        aria-label="remove item from cart"
      >
        <IoCloseCircleOutline />
      </button>
    </li>
  );
};

export default CartItem;
