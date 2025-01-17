import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Card from "../../components/Card";
import formatCategory from "../../utils/formatCategory";
import QuickView from "../../components/QuickView";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const [tabProducts, setTabProducts] = useState(products);
  const catList = ["mens-shirts", "mens-shoes", "mens-watches"];

  const changeTab = (e, cat) => {
    const buttons = document.querySelectorAll(".tab-btn");
    buttons.forEach((button) => button.classList.remove("active"));

    e.currentTarget.classList.add("active");

    const filteredProducts = products.filter(
      (product) => product.category === cat
    );

    setTabProducts(filteredProducts);
  };

  useEffect(() => {
    setTabProducts(
      products.filter((product) => product.category === "mens-shirts")
    );
  }, [products]);

  return (
    <section className="featured-products">
      <div className="container">
        <h2 className="title">Featured Products</h2>

        <div className="tabs-wrapper">
          {catList.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`tab-btn ${cat === "mens-shirts" && "active"}`}
              onClick={(e) => changeTab(e, cat)}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>
        <div className="cards-container tab-content">
          {tabProducts.map((product) => (
            <Card key={product.id} item={product} />
          ))}
        </div>
      </div>
      <QuickView item={products[4]} />
    </section>
  );
};

export default FeaturedProducts;
