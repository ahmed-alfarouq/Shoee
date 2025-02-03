import React, { useState } from "react";

// Components
import ReviewRating from "./ReviewRating";
import PriceRangeSlider from "./PriceSlider";

// Utils
import formatCategory from "../utils/formatCategory";

// Assets
import { IoClose } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const Filter = ({ categories, close, filter, hidden }) => {
  const ratings = [5, 4, 3, 2, 1];
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const applyFilter = () => filter("price", priceRange);

  return (
    <div
      className={`filter ${hidden ? "" : "open"}`}
      aria-hidden={hidden}
      aria-expanded={!hidden}
    >
      <IoClose
        className="close"
        onClick={close}
        aria-label="Close filter menu."
        tabIndex="0"
      />
      <div className="category">
        <h2 className="title">Product Categories</h2>
        <ul className="list">
          {categories.map((category) => (
            <li key={category}>
              <FaAngleRight aria-hidden="true" />
              <span
                onClick={() => filter("category", category)}
                aria-label={`Filter products by category ${formatCategory(
                  category
                )}`}
              >
                {formatCategory(category)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="price">
        <h2 className="title">Filter by price</h2>
        <PriceRangeSlider
          min={100}
          max={10000}
          onChange={setPriceRange}
          aria-label="Price range filter"
        />
        <button
          type="button"
          className="btn"
          onClick={applyFilter}
          aria-label="Apply filter by price."
        >
          Apply Filter
        </button>
      </div>
      <div className="rating">
        <h2 className="title">Filter by rating</h2>
        <ul className="list">
          {ratings.map((rating) => (
            <li key={rating}>
              <FaAngleRight aria-hidden="true" />
              <span
                onClick={() => filter("rating", rating)}
                aria-label={`Filter products with rating of ${rating} or higher`}
              >
                <ReviewRating rating={rating} /> && More
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
