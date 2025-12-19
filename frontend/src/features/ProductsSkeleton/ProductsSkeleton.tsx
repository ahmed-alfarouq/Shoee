import { ProductSkeleton } from "@features/ProductSkeleton";

import type { ProductsSkeletonProps } from "./ProductsSkeleton.types";

const ProductsSkeleton = ({ count = 4 }: ProductsSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </>
  );
};

export default ProductsSkeleton;
