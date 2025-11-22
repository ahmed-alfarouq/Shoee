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
    <section
      className={`${styles.products_container} ${
        !isLoading && !products.length && styles.empty_products_container
      }`}
    >
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
        <p className="mx-auto">
          No products match your search. Try adjusting the filters.
        </p>
      )}
    </section>
  );
};

export default ProductsContainer;
