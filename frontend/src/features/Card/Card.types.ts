import type { Product } from "@/types/index.types";

export interface CardProps {
  /**
   * REQUIRED: The product data to display inside the card with
   * details like title, price, image, etc
   */
  item: Product;

  /**
   * OPTIONAL: Additional class to for the article container
   */
  className?: string;
}
