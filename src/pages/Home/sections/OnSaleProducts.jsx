import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// Components
import TabsWithProducts from "../../../components/TabsWithProducts";

const OnSaleProducts = () => {
  const products = useSelector((state) => state.products.products);
  const [tabsProducts, setTabsProducts] = useState([]);

  const tabsList = ["mens-shirts", "mens-shoes", "mens-watches"];

  useEffect(() => {
    const onSaleProducts = products.filter(
      (product) => Math.round(product.discountPercentage) >= 9
    );
    setTabsProducts(onSaleProducts);
  }, [products]);

  return (
    <section className="on-sale-products tabs-section">
      <div className="container">
        <h2 className="title">On Sale Products</h2>
        <TabsWithProducts tabs={tabsList} products={tabsProducts} />
      </div>
    </section>
  );
};

export default OnSaleProducts;
