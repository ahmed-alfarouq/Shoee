const filterProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

export default filterProductsByCategory;
