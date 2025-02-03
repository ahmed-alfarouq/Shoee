import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../app/features/products/productsSlice";

import { MdBookmarkAdded } from "react-icons/md";

const AddToCart = ({ id, quantity, callback }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("add to cart");
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (quantity <= 0 || added) {
      return;
    }

    dispatch(addItemToCart({ id, quantity }));
    if (callback && typeof callback === "function") {
      callback();
    }

    setAdded(true);
    setText("added to cart");
    setTimeout(() => {
      setAdded(false);
      setText("add to cart");
    }, 3000);
  };

  return (
    <button
      type="button"
      className={`btn add-to-cart ${added ? "added" : ""}`}
      onClick={addToCart}
      aria-live="polite"
    >
      {text}
      <MdBookmarkAdded aria-hidden="true" />
    </button>
  );
};

export default AddToCart;
