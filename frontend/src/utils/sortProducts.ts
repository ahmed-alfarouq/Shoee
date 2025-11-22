import type { Product } from "@/types/index.types";

const sortProducts = (products: Product[], type: string): Product[] => {
  switch (type) {
    case "date":
      return products.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    case "price":
      return products.sort((a, b) => a.price - b.price);
    case "price-desc":
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};

export default sortProducts;
