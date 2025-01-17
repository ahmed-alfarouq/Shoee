import React from "react";
import { Link } from "react-router-dom";

// Utils
import calcOriginalPrice from "../utils/calcOriginalPrice";
import formatCategory from "../utils/formatCategory";
import ReviewRating from "./ReviewRating";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-thumbnail">
        <Link to={`/products/${item.id}`}>
          <img src={item.thumbnail} alt={item.title} />
        </Link>
        <button type="button" className="quick-view">
          quick view
        </button>
      </div>
      <div className="card-content">
        {Math.round(item.discountPercentage) >= 10 && (
          <span className="discount">Sale!</span>
        )}
        <span className="category">{formatCategory(item.category)}</span>
        <h2 className="title">
          <Link to={`products/${item.id}`}>{item.title}</Link>
        </h2>
        <ReviewRating rating={item.rating} />
        <div className="price">
          {Math.round(item.discountPercentage) >= 10 && (
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
      </div>
    </div>
  );
};

export default Card;
