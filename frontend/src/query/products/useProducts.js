import axios from "axios";

import { useInfiniteQuery } from "@tanstack/react-query";

const PRODUCTS_API = process.env.REACT_APP_BASE_API_URL;

export const fetchProducts = async (category, rating, minPrice, maxPrice, discountPercentage, cursor, limit) => {
  const params = new URLSearchParams();
  if (cursor) params.set("cursor", cursor);

  if (limit) params.set("limit", limit);

  if (rating) params.set("rating", rating);
  if (category) params.set("category", category);
  if (minPrice) params.set("minPrice", minPrice);
  if (maxPrice) params.set("maxPrice", maxPrice);
  if (discountPercentage) params.set("discountPercentage", discountPercentage);


  const res = await axios.get(`${PRODUCTS_API}/products${params.size !== 0 ? '?' : ''}${params.toString()}`);

  return res.data;
};

export const useProducts = ({
  category,
  rating,
  minPrice,
  maxPrice,
  discountPercentage,
  limit,
}) =>
  useInfiniteQuery({
    queryKey: ["products", category, rating, minPrice, maxPrice, discountPercentage, limit],
    queryFn: async ({ pageParam }) => await fetchProducts(category, rating, minPrice, maxPrice, discountPercentage, pageParam, limit),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
