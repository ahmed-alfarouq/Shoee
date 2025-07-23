import React, { useMemo } from "react";

// Components
import TabsWithProducts from "components/TabsWithProducts";

// Query
import { useProducts } from "query/products/useProducts";

// utils
import filterProductsByRating from "utils/filterProductsByRating";

// Contants
import { categories } from "constants";

const TopRatedProducts = () => {
  const { data: products } = useProducts();

  const topRatedProducts = useMemo(
    () => filterProductsByRating(products, 3.5),
    [products]
  );

  return (
    <section className="tabs-section top-rated-products">
      <div className="container">
        <h2 className="title under-line">Top Rated Products</h2>

        <TabsWithProducts tabs={categories} products={topRatedProducts} />
      </div>
    </section>
  );
};

export default TopRatedProducts;
