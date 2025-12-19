import type { Product } from "@/types/index.types";

export interface ProductsContainerProps {
  /**
   * REQUIRED: Indicates whether to show loading skeleton or actual products
   */
  isLoading: boolean;

  /**
   * OPTIONAL: Number of skeleton placeholders to render while loading
   * @default 4
   */
  skeletonCount?: number;

  /**
   * REQUIRED: The list of loaded products
   */
  products: Product[];
}
