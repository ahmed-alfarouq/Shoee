const sortProducts = (products, type) => {
  switch (type) {
    case "date":
      return [...products].sort(
        (a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt)
      );
    case "price":
      return [...products].sort((a, b) => a.price - b.price);
    case "price-desc":
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export default sortProducts;
