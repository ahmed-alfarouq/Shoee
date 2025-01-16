import React from "react";
import { Link } from "react-router-dom";

import calcOriginalPrice from "../utils/calcOriginalPrice";

// Assets
import { IoMdArrowDroprightCircle } from "react-icons/io";

const QuickView = ({ item }) => {
  console.log(item);
  return (
    <div className="quick-view-model">
      <div className="image">
        <span className="sale">Sale!</span>
      </div>
      <div className="content">
        <Link to={`/products/`}>
          <h1 className="title"></h1>
        </Link>
        <div className="price">
          {Math.round(item.discountPercentage) >= 10 && (
            <>
              <span class="sr-only">
                Original price was: $
                {calcOriginalPrice(item.price, item.discountPercentage)}.
              </span>
              <del aria-hidden="true" className="original-price">
                ${calcOriginalPrice(item.price, item.discountPercentage)}
              </del>
            </>
          )}
          <span class="sr-only">Current price is: ${item.price}.</span>
          <ins aria-hidden="true" className="current-price">
            ${item.price}
          </ins>
        </div>
        <p className="description">{item.description}</p>
        <p>Category: {item.category} </p>
        <ul className="info">
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
    </div>
  );
};

export default QuickView;
