import React, { useEffect, useState } from "react";

// Components
import Card from "./Card";

// utils
import formatCategory from "../utils/formatCategory";
import filterProductsByCategory from "../utils/filterProductsByCategory";

const TabsWithProducts = ({ tabs, products }) => {
  const [tabProducts, setTabProducts] = useState(products);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const changeTab = (cat) => setActiveTab(cat);

  useEffect(() => {
    setTabProducts(filterProductsByCategory(products, activeTab));
  }, [products, activeTab]);

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
            tabProducts.length >= 4 ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr",
        }}
      >
        {tabProducts.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default TabsWithProducts;
