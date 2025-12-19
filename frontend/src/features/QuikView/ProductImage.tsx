import { Badge } from "@/components/Badge";

import type { ProductImageProps } from "./QuickView.types";

const ProductImage = ({ item }: ProductImageProps) => {
  const onSale = Math.round(item.discountPercentage) >= 10;

  return (
    <div className="image">
      <img src={item.thumbnail} alt={item.title} aria-hidden="false" />
      {onSale && <Badge text="sale!" />}
    </div>
  );
};

export default ProductImage;
