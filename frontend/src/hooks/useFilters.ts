import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import type { FilterOptions } from "@/types/index.types";

const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters = useMemo<FilterOptions>(() => {
    const obj: FilterOptions = {};

    obj.s = searchParams.get("s") || undefined;
    obj.limit = Number(searchParams.get("limit")) || undefined;
    obj.cursor = searchParams.get("cursor") || undefined;
    obj.discountPercentage =
      Number(searchParams.get("discountPercentage")) || undefined;

    // arrays
    const ratings = searchParams.getAll("rating");
    if (ratings.length) obj.rating = ratings;

    const categories = searchParams.getAll("category");
    if (categories.length) obj.category = categories;

    // price
    const price = searchParams.getAll("price");
    if (price.length) obj.price = [Number(price[0]), Number(price[1])];

    return obj;
  }, [searchParams]);

  const updateFilters = useCallback(
    (newFilters: FilterOptions) => {
      const params = new URLSearchParams();

      // string fields
      if (newFilters.s) params.set("s", newFilters.s);
      if (newFilters.limit) params.set("limit", String(newFilters.limit));
      if (newFilters.cursor) params.set("cursor", newFilters.cursor);
      if (newFilters.discountPercentage)
        params.set("discountPercentage", String(newFilters.discountPercentage));

      // array fields – add multiple params
      if (newFilters.rating?.length) {
        newFilters.rating.forEach((r) => params.append("rating", r));
      }

      if (newFilters.category?.length) {
        newFilters.category.forEach((c) => params.append("category", c));
      }

      // price range
      if (newFilters.price?.length === 2) {
        params.append("price", String(newFilters.price[0]));
        params.append("price", String(newFilters.price[1]));
      }

      setSearchParams(params);
    },
    [setSearchParams]
  );

  const clearFilters = useCallback(() => {
    setSearchParams({});
  }, [setSearchParams]);

  return { filters, updateFilters, clearFilters };
};

export default useFilters;
