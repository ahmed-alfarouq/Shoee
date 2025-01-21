import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";

// Components
import Card from "../../../components/Card";
import formatCategory from "../../../utils/formatCategory";
import QuickView from "../../../components/QuickView";
import filterProductsByCategory from "../../../utils/filterProductsByCategory";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const [tabProducts, setTabProducts] = useState(products);
  const [modelItem, setModelItem] = useState({});
  const [isModelHidden, setIsModelHidden] = useState(true);
  const [activeTab, setActiveTab] = useState("mens-shirts");

  const catList = ["mens-shirts", "mens-shoes", "mens-watches"];

  const changeTab = (cat) => {
    setActiveTab(cat);
    setTabProducts(filterProductsByCategory(products, cat));
  };

  const productMap = useMemo(() => {
    return products.reduce((map, product) => {
      map[product.id] = product;
      return map;
    }, {});
  }, [products]);

  const openModel = (id) => {
    setModelItem(productMap[id] || {});
    setIsModelHidden(false);
  };

  const closeModel = () => {
    setModelItem({});
    setIsModelHidden(true);
  };

  useEffect(() => {
    setTabProducts(filterProductsByCategory(products, "mens-shirts"));
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
              className={`tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => changeTab(cat)}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>
        <div className="cards-container tab-content">
          {tabProducts.map((product) => (
            <Card key={product.id} item={product} quickView={openModel} />
          ))}
        </div>
      </div>
      <QuickView
        hidden={isModelHidden}
        close={closeModel}
        item={modelItem}
      />
    </section>
  );
};

export default FeaturedProducts;
