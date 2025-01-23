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
    <div className={`filter ${hidden ? "" : "open"}`}>
      <IoClose className="close" onClick={close} />
      <div className="category">
        <h2 className="title">Product Categories</h2>
        <ul className="list">
          {categories.map((category) => (
            <li key={category}>
              <FaAngleRight />
              <span onClick={() => filter("category", category)}>
                {formatCategory(category)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="price">
        <h2 className="title">Filter by price</h2>
        <PriceRangeSlider min={100} max={10000} onChange={setPriceRange} />
        <button type="button" className="btn" onClick={applyFilter}>
          Apply Filter
        </button>
      </div>
      <div className="rating">
        <h2 className="title">Filter by rating</h2>
        <ul className="list">
          {ratings.map((rating) => (
            <li key={rating}>
              <FaAngleRight />
              <span onClick={() => filter("rating", rating)}>
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
