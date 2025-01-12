import React from "react";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt={item.name} />
        <span className="items-number">{item.qty}</span>
      </div>
      <h2>{item.name}</h2>
      <BsTrashFill
        className="trash-icon"
        onClick={() => dispatch(removeFromCart(item.id))}
      />
      <h3>Total Price: {item.qty * item.price} $</h3>
    </div>
  );
};

export default CartItem;
