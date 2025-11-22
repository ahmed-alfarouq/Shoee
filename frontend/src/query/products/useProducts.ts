import axios from "axios";

import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import type { FilterOptions, ProductsResponse } from "@/types/index.types";

const PRODUCTS_API = import.meta.env.VITE_BASE_API_URL;

export const fetchProducts = async ({
  s,
  category,
  rating,
  price,
  discountPercentage,
  cursor,
  limit,
}: FilterOptions): Promise<ProductsResponse> => {
  const params = new URLSearchParams();

  if (s) params.set("s", s);

  if (cursor) params.set("cursor", cursor);

  if (limit) params.set("limit", String(limit));

  if (Array.isArray(rating) && rating.length) {
    rating.forEach((r) => params.append("rating", r));
  }

  if (Array.isArray(category) && category.length) {
    category.forEach((c) => params.append("category", c));
  }

  if (Array.isArray(price) && price.length === 2) {
    price.forEach((p) => params.append("price", String(p)));
  }

  if (discountPercentage)
    params.set("discountPercentage", String(discountPercentage));

  const res = await axios.get(
    `${PRODUCTS_API}/products${
      params.size !== 0 ? "?" : ""
    }${params.toString()}`
  );

  return res.data;
};

export const useProducts = ({
  s,
  category,
  rating,
  price,
  discountPercentage,
  limit,
}: FilterOptions) =>
  useInfiniteQuery<
    ProductsResponse,
    Error,
    InfiniteData<ProductsResponse, string | undefined>,
    readonly unknown[],
    string | undefined
  >({
    queryKey: [
      "products",
      s,
      category,
      rating,
      price,
      discountPercentage,
      limit,
    ],
    queryFn: async ({ pageParam }: { pageParam?: string }) =>
      await fetchProducts({
        s,
        limit,
        cursor: pageParam,
        category,
        rating,
        price,
        discountPercentage,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
