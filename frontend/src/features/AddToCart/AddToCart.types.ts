import type { ProductProps } from "@/types/index.types";

export interface AddToCartProps {
  /**
   * The item to add to the cart
   */
  product: ProductProps;

  /**
   * The quantity of this product to add to the cart
   */
  quantity: number;
  /**
   * OPTIONAL: Callback function fired after the product has been successfully added to the cart.
   */
  callback?: () => void;
}
