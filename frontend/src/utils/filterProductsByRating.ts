const filterProductsByRating = (products, rating) => {
  return products.filter((product) => product.rating >= rating);
};
export default filterProductsByRating;
