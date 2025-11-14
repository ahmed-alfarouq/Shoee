import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// Components
import Price from "./card/Price";
import BGOverlay from "./BGOverlay";
import AddToCart from "./AddToCart";
import ProductInfo from "./quikView/ProductInfo";
import ProductImage from "./quikView/ProductImage";
import IncrementDecrementCounter from "./IncrementDecrementCounter";

// Utils
import formatText from "utils/formatText";

// Assets
import { IoMdClose } from "react-icons/io";

const QuickView = forwardRef(({ item, hidden, close }, ref) => {
  const [contentPaddingBottom, setContentPaddingBottom] = useState(72);
  const [quantity, setQuantity] = useState(0);

  const contentFooterRef = useRef(null);
  const closeButtonRef = useRef(null);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity - 1);
  const resetQuantity = () => setQuantity(0);

  useEffect(() => {
    setContentPaddingBottom(contentFooterRef.current.clientHeight + 2);
  }, []);

  useEffect(() => {
    if (!hidden) {
      const closeButton = closeButtonRef.current;
      closeButton?.focus();
    }
  }, [hidden]);

  return (
    <div
      className={`quick-view-model ${hidden ? "hidden" : ""}`}
      ref={ref}
      aria-hidden={hidden}
      aria-modal={!hidden}
    >
      <BGOverlay reset={close} hidden={hidden} />
      <div className="model-container">
        <IoMdClose
          className="close"
          onClick={close}
          aria-label="Close"
          tabIndex={0}
          ref={closeButtonRef}
        />
        <ProductImage item={item} />
        <div className="model-content">
          <div
            className="content-body"
            style={{ paddingBottom: contentPaddingBottom }}
          >
            <Link to={`/products/${item._id}`}>
              <h1 className="title">{item.title}</h1>
            </Link>
            <Price item={item} />
            <p className="description" tabIndex={0}>
              {item.description}
            </p>
            <p className="category">
              Category:
              <Link to={`/products/category/${item.category}`}>
                {formatText(item.category)}
              </Link>
            </p>
            <ProductInfo item={item} />
          </div>
          <div className="content-footer" ref={contentFooterRef}>
            <IncrementDecrementCounter
              increment={increment}
              decrement={decrement}
              count={quantity}
            />
            <AddToCart
              product={item}
              quantity={quantity}
              callback={resetQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuickView;
