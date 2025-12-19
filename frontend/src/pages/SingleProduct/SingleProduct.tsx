import { Activity } from "react";
import { useParams } from "react-router-dom";

import styles from "./SingleProduct.module.scss";

import Product from "./sections/Product";
import { Reviews } from "@/features/Reviews";
import RelatedProducts from "./sections/RelatedProducts";

import useProduct from "@/query/products/useProduct";

const SingleProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading } = useProduct(id!);

  if (isLoading) return null;

  return (
    <main className={styles.single_product}>
      <div className="container">
        <Product product={product} sliderImages={product.images} />
        <Activity mode={product.reviews.length ? "visible" : "hidden"}>
          <Reviews reviews={product.reviews} />
        </Activity>
        <RelatedProducts id={product.id} category={product.category} />
      </div>
    </main>
  );
};

export default SingleProduct;
