import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

// Components
import Reviews from "./sections/Reviews";
import Product from "./sections/Product";
import RelatedProducts from "./sections/RelatedProducts";

// Query
import { useProducts } from "query/products/useProducts";

const SingleProduct = () => {
  const { id } = useParams();

  const { data: products } = useProducts();

  const product = useMemo(
    () => products.find((p) => p.id === parseInt(id)),
    [products, id]
  );

  return (
    <main className="single_product">
      <div className="container">
        <Product product={product} sliderImages={product.images} />
        <Reviews reviews={product.reviews} />
        <RelatedProducts
          products={products}
          productID={product.id}
          category={product.category}
        />
      </div>
    </main>
  );
};

export default SingleProduct;
