import type { FilterOptions } from "@/types/index.types";

export interface TabsWithProductsProps {
  /**
   * REQUIRED: Array of tabs names
   */
  tabs: string[];

  /**
   * REQUIRED: Current filters applied to the products displayed under each tab,
   * should follow the `FilterOptions` interface:
   * - `s`: string | undefined
   * - `limit`: number | undefined
   * - `cursor`: string | undefined
   * - `category`: string[] | undefined
   * - `rating`: string[] | undefined
   * - `price`: number[] | undefined
   * - `discountPercentage`: number | undefined
   */
  filters: FilterOptions;
}
