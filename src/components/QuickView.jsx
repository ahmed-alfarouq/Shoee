import React, { forwardRef, useRef } from "react";
import { Link } from "react-router-dom";

// Components
import BGOverlay from "./BGOverlay";
import IncrementDecrementCounter from "./IncrementDecrementCounter";
import AddToCart from "./AddToCart";

// Utils
import calcOriginalPrice from "../utils/calcOriginalPrice";
import formatCategory from "../utils/formatCategory";

// Assets
import { IoMdArrowDroprightCircle, IoMdClose } from "react-icons/io";

const QuickView = forwardRef(({ item, hidden, close }, ref) => {
  const BGoverlayRef = useRef(null);
  const onSale = Math.round(item.discountPercentage) >= 10;

  return (
    <div
      className={`quick-view-model ${hidden ? "hidden" : ""}`}
      ref={ref}
      aria-hidden={hidden}
    >
      <BGOverlay reset={close} ref={BGoverlayRef} />
      <div className="model-container">
        <IoMdClose className="close" onClick={close} />
        <div className="image">
          <img src={item.thumbnail} alt={item.title} />
          {onSale && <span className="onsale">Sale!</span>}
        </div>
        <div className="model-content">
          <div className="content-body">
            <Link to={`/products/${item.id}`}>
              <h1 className="title">{item.title}</h1>
            </Link>
            <div className="price">
              {onSale && (
                <>
                  <span className="sr-only">
                    Original price was: $
                    {calcOriginalPrice(item.price, item.discountPercentage)}.
                  </span>
                  <del aria-hidden="true" className="original-price">
                    ${calcOriginalPrice(item.price, item.discountPercentage)}
                  </del>
                </>
              )}
              <span className="sr-only">Current price is: ${item.price}.</span>
              <ins aria-hidden="true" className="current-price">
                ${item.price}
              </ins>
            </div>
            <p className="description">{item.description}</p>
            <p className="category">
              Category:
              <Link to={`/products/${item.category}`}>
                {formatCategory(item.category)}
              </Link>
            </p>
            <ul className="info">
              <li>Free shipping on orders over $100!</li>
              <li>
                <IoMdArrowDroprightCircle /> {item.returnPolicy}
              </li>
              <li>
                <IoMdArrowDroprightCircle /> {item.shippingInformation}
              </li>
              <li>
                <IoMdArrowDroprightCircle /> {item.warrantyInformation}
              </li>
            </ul>
          </div>
          <div className="content-footer">
            <IncrementDecrementCounter
              increment={() => {
                console.log("increase");
              }}
              decrement={() => {
                console.log("decrease");
              }}
              count={0}
            />
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
});

export default QuickView;
