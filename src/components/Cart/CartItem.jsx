import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../app/features/products/productsSlice";

// Assets
import { IoCloseCircleOutline   } from "react-icons/io5";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  console.log(item);
  return (
    <li className="cart-item">
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <span className="title">{item.title}</span>
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
