import React from "react";
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

  const increment = (id) => dispatch(incrementCartItem(id));
  const decrement = (id) => dispatch(decrementCartItem(id));

  return (
    <li className="cart-item">
      <div>
        <img src={item.thumbnail} alt={item.title} />
        <div>
          <span className="title">{truncate(item.title, 4)}</span>
          <IncrementDecrementCounter
            count={item.qty}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </div>
      <div className="price">
        <bdi>
          <span className="currency-symbol">$</span>
          {item.qty || 1 * item.price}
        </bdi>
      </div>
      <IoCloseCircleOutline
        className="remove"
        onClick={() => dispatch(removeFromCart(item.id))}
      />
    </li>
  );
};

export default CartItem;
