import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../../../app/features/products/productsSlice";

// Components
import BlurImage from "../../../components/BlurImage";
import IncrementDecrementCounter from "../../../components/IncrementDecrementCounter";

// Assets
import { IoCloseCircleOutline } from "react-icons/io5";

const CartContent = () => {
  const cartItems = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  const increment = (id) => dispatch(incrementCartItem(id));
  const decrement = (id) => dispatch(decrementCartItem(id));

  const removeItem = (id) => dispatch(removeFromCart(id));

  return (
    <table className="cart-content">
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((product) => (
          <tr className="product" key={product.id}>
            <td>
              <button
                className="remove"
                onClick={() => removeItem(product.id)}
                aria-label={`Remove ${product.name}`}
              >
                <IoCloseCircleOutline />
              </button>
            </td>
            <td>
              <BlurImage
                src={product.thumbnail}
                placeholder="https://placehold.co/300x300"
                alt={product.title}
                className="thumbnail"
              />
            </td>
            <td data-title="Product">{product.title}</td>
            <td data-title="Price">${product.price.toFixed(2)}</td>
            <td data-title="Quantity">
              <IncrementDecrementCounter
                increment={() => increment(product.id)}
                decrement={() => decrement(product.id)}
                count={product.qty}
              />
            </td>
            <td data-title="Subtotal">
              ${(product.price * product.qty).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartContent;
