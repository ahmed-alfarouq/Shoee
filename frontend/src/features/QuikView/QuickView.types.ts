import type { Product } from "@/types/index.types";

export interface QuickViewProps {
  /**
   * REQUIRED: The product object
   */
  item: Product;

  /**
   * OPTIONAL: If true, Sale! badge will be displayed
   */
  onSale?: boolean;

  /**
   * REQUIRED: Decides if modal is displayed or not
   */
  hidden: boolean;

  /**
   * REQUIRED: Callback fired when clicking the BG overlay or the close icon.
   */
  close: () => void;
}

export interface ProductImageProps {
  /**
   * REQUIRED: The product object
   */
  item: Product;
}
