import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import TabsWithProducts from "../../../components/TabsWithProducts";

// utils
import filterProductsByRating from "../../../utils/filterProductsByRating";

const TopRatedProducts = () => {
  const products = useSelector((state) => state.products.products);
  const [tabsProducts, setTabsProducts] = useState([]);

  const tabsList = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    const topRatedProducts = filterProductsByRating(products, 3.5);
    setTabsProducts(topRatedProducts);
  }, [products]);

  return (
    <section className="tabs-section top-rated-products">
      <div className="container">
        <h2 className="title under-line">Top Rated Products</h2>

        <TabsWithProducts tabs={tabsList} products={tabsProducts} />
      </div>
    </section>
  );
};

export default TopRatedProducts;
