import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import BlurImage from "./BlurImage";

// Utils
import calcOriginalPrice from "../utils/calcOriginalPrice";
import formatCategory from "../utils/formatCategory";
import ReviewRating from "./ReviewRating";
import QuickView from "./QuickView";

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div className="card">
      <div className="card-thumbnail">
        <Link
          to={`/products/${item.id}`}
          aria-label={`View details for ${item.title}`}
        >
          <BlurImage
            src={item.thumbnail}
            placeholder="https://placehold.co/300x300"
            alt={item.title}
          />
        </Link>
        <button
          type="button"
          className="quick-view"
          onClick={toggleModal}
          aria-label={`Quick view for ${item.title}`}
        >
          quick view
        </button>
      </div>
      <div className="card-content">
        {Math.round(item.discountPercentage) >= 9 && (
          <span className="onsale">Sale!</span>
        )}
        <span className="category">{formatCategory(item.category)}</span>
        <h2 className="title">
          <Link
            to={`/products/${item.id}`}
            aria-label={`View details for ${item.title}`}
          >
            {item.title}
          </Link>
        </h2>
        <ReviewRating rating={item.rating} />
        <div className="price">
          {Math.round(item.discountPercentage) >= 9 && (
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
      <QuickView hidden={!isOpen} close={toggleModal} item={item} />
    </div>
  );
};

export default Card;
