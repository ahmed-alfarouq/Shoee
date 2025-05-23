import React from "react";

const SortList = ({ sortType, sort }) => {
  return (
    <select
      className="shop-order"
      name="orderby"
      onChange={sort}
      aria-label="Shop order"
      value={sortType}
    >
      <option value="menu_order">Default sorting</option>
      <option value="date">Sort by latest</option>
      <option value="price">Sort by price: low to high</option>
      <option value="price-desc">Sort by price: high to low</option>
    </select>
  );
};

export default SortList;
