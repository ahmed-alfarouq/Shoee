const calcOriginalPrice = (newPrice, discountPercent) => {
  if (discountPercent >= 100 || discountPercent < 0) {
    throw new Error("Discount percent must be between 0 and 100.");
  }

  const originalPrice = newPrice / (1 - discountPercent / 100);
  return originalPrice.toFixed(2);
};

export default calcOriginalPrice;
