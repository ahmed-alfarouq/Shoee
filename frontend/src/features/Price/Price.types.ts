import type { Product } from "@/types/index.types";

export interface PriceProps {
  /**
   * REQUIRED: The product item whose price will be displayed
   */
  item: Product;

  /**
   * OPTIONAL: Indicates whether a discount should be applied when displaying the price
   */
  hasDiscount?: boolean;
}
