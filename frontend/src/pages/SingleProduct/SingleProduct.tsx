import { useParams } from "react-router-dom";

import styles from "./SingleProduct.module.scss";

import Error from "@/pages/Error";
import Product from "./sections/Product";
import { Reviews } from "@/features/Reviews";
import RelatedProducts from "./sections/RelatedProducts";

import useProduct from "@/query/products/useProduct";
import { Activity } from "react";

const SingleProduct = () => {
  const { id } = useParams();

  const { data: product, isLoading, error } = useProduct(id!);

  if (isLoading) return null;

  if (error) return <Error error={error} />;

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
