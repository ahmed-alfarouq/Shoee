import { Badge } from "@/components/Badge";

const ProductImage = ({ item }) => {
  const onSale = Math.round(item.discountPercentage) >= 10;

  return (
    <div className="image">
      <img src={item.thumbnail} alt={item.title} aria-hidden="false" />
      {onSale && <Badge text="sale!" />}
    </div>
  );
};

export default ProductImage;
