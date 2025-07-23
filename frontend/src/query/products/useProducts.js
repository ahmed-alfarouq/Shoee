import axios from "axios";

import { useQuery } from "@tanstack/react-query";

import { categories } from "../../constants";

const PRODUCTS_API = process.env.REACT_APP_PRODUCTS_API_URL;

export const fetchProducts = async () => {
  const responses = await Promise.all(
    categories.map((cat) =>
      axios
        .get(`${PRODUCTS_API}/products/category/${cat}`)
        .then((res) => res.data.products)
    )
  );

  return responses.flat();
};

export const useProducts = () =>
  useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: Infinity,
    cacheTime: Infinity,
    refetchOnWindowFocus: false,
  });
