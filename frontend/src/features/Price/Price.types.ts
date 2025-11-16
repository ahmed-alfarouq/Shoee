import type { ProductProps } from "@/types/index.types";

export interface PriceProps {
  item: ProductProps;
  hasDiscount?: boolean;
}
