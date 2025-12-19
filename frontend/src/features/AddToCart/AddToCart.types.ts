import type { Product } from "@/types/index.types";

export interface AddToCartProps {
  /**
   * REQUIRED: The item to add to the cart
   */
  product: Product;

  /**
   * REQUIRED: The quantity of this product to add to the cart
   */
  quantity: number;
  /**
   * OPTIONAL: Callback function fired after the product has been successfully added to the cart.
   */
  callback?: () => void;
}
