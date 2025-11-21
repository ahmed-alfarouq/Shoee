import styles from "./ProductsContainer.module.scss";

import { Card } from "@features/Card";
import { ProductsSkeleton } from "@features/ProductsSkeleton";

import type { ProductsContainerProps } from "./ProductsContainer.types";

const ProductsContainer = ({
  isLoading,
  skeletonCount = 4,
  products,
}: ProductsContainerProps) => {
  return (
    <section className={styles.products_container}>
      {isLoading ? (
        <ProductsSkeleton count={skeletonCount} />
      ) : products.length ? (
        products.map((product) => (
          <Card
            key={product.id}
            item={product}
            className={styles.product_card}
          />
        ))
      ) : (
        <p>No products to show.</p>
      )}
    </section>
  );
};

export default ProductsContainer;
