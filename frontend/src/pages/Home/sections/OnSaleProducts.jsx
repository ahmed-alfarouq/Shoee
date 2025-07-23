import React, { useMemo } from "react";

// Components
import TabsWithProducts from "components/TabsWithProducts";

// Query
import { useProducts } from "query/products/useProducts";

// Constants
import { categories } from "constants";

const OnSaleProducts = () => {
  const { data: products } = useProducts();

  const onSaleProducts = useMemo(
    () =>
      products.filter((product) => Math.round(product.discountPercentage) >= 9),
    [products]
  );

  return (
    <section className="on-sale-products tabs-section">
      <div className="container">
        <h2 className="title under-line">On Sale Products</h2>
        <TabsWithProducts tabs={categories} products={onSaleProducts} />
      </div>
    </section>
  );
};

export default OnSaleProducts;
