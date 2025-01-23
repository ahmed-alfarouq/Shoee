const filterProductsByPrice = (products, price) => {
  let res = [];
  if (typeof price === typeof []) {
    res = products.filter(
      (product) => product.price >= price[0] && product.price <= price[1]
    );
    return res;
  }
  console.log(price);
};

export default filterProductsByPrice;
