import type { ProductProps } from "@/types/index.types";

export interface QuickViewProps {
  item: ProductProps;
  hidden: boolean;
  close: () => void;
}
