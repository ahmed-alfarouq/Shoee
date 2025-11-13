import React, { useState } from "react";

// Components
import Card from "./Card";

// utils
import formatCategory from "../utils/formatCategory";
import { useProducts } from "query/products/useProducts";

const TabsWithProducts = ({ tabs, filters }) => {
  console.log(filters)
  const [filterOptions, setFilterOptions] = useState(filters);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, isLoading, error } = useProducts(filterOptions);

  const changeTab = (cat) => {
    setActiveTab(cat);
    setFilterOptions({ ...filters, category: cat });
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) return;

  const products = data.pages[0].products;

  return (
    <>
      <div
        className="tabs-wrapper"
        role="tablist"
        aria-label="Product categories"
      >
        {tabs.map((cat) => (
          <button
            type="button"
            key={cat}
            id={`tab-${cat}`}
            aria-controls={`tabpanel-${cat}`}
            className={`tab-btn ${activeTab === cat ? "active" : ""}`}
            onClick={() => changeTab(cat)}
          >
            {formatCategory(cat)}
          </button>
        ))}
      </div>
      <div
        id={`tabpanel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        className="cards-container tab-content"
        style={{
          gridTemplateColumns:
            products.length >= 4 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
        }}
      >
        {products.map((product) => (
          <Card key={product._id} item={product} />
        ))}
      </div>
    </>
  );
};

export default TabsWithProducts;
