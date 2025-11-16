import { useState } from "react";

// Components
// import { addItemToCart } from "app/features/products/productsSlice";

import { MdBookmarkAdded } from "react-icons/md";

import type { AddToCartProps } from "./AddToCart.types";
import { Button } from "@/components/Button";

const AddToCart = ({ product, quantity, callback }: AddToCartProps) => {
  // const dispatch = useDispatch();
  const [text, setText] = useState("add to cart");
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    if (quantity <= 0 || added) {
      return;
    }

    // dispatch(addItemToCart({ product, quantity }));

    callback?.();

    setAdded(true);
    setText("added to the cart");

    setTimeout(() => {
      setAdded(false);
      setText("add to cart");
    }, 3000);
  };

  return (
    <Button
      className={added ? "added" : ""}
      onClick={addToCart}
      aria-live="polite"
    >
      {text}
      <MdBookmarkAdded aria-hidden="true" />
    </Button>
  );
};

export default AddToCart;
