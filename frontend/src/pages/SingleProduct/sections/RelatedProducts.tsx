import styles from "../SingleProduct.module.scss";

import { ProductsContainer } from "@/features/ProductsContainer";

import { useProducts } from "@/query/products/useProducts";

import type { RelatedProductsProps } from "../SingleProduct.type";

const RelatedProducts = ({ category, id }: RelatedProductsProps) => {
  const { data, isLoading, error } = useProducts({
    exclude: [id],
    category: [category],
    limit: 4,
  });

  if (error) return null;

  const products = data?.pages[0].products;

  return (
    <section className={styles.related_products}>
      <h2 className={styles.title}>Related Products</h2>
      <ProductsContainer
        skeletonCount={4}
        products={products || []}
        isLoading={isLoading}
      />
    </section>
  );
};

export default RelatedProducts;
