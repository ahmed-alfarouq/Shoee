import type { Product } from "@/types/index.types";

export interface ProductProps {
  /**
   * REQUIRED: The product object containing all relevant data.
   */
  product: Product;

  /**
   * REQUIRED: Array of image URLs for the product slider/carousel.
   */
  sliderImages: string[];
}

export interface RelatedProductsProps {
  /**
   * REQUIRED: The category used to find related products.
   */
  category: string;

  /**
   * REQUIRED: The product ID to exclude from the related list.
   * Ensures the current product does not appear in its own related list.
   */
  id: string;
}
