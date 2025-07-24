import React from "react";

const ProductImage = ({ item }) => {
  const onSale = Math.round(item.discountPercentage) >= 10;
  return (
    <div className="image">
      <img src={item.thumbnail} alt={item.title} aria-hidden="false" />
      {onSale && <span className="onsale">Sale!</span>}
    </div>
  );
};

export default ProductImage;
