import axios from "axios";

import { useQuery } from "@tanstack/react-query";
import type { Review } from "@/types/index.types";

const PRODUCTS_API = import.meta.env.VITE_BASE_API_URL;

export const fetchTopRatedReviews = async (
  rating?: number,
  count?: number
): Promise<Review[]> => {
  const res = await axios.get(`${PRODUCTS_API}/products/reviews/top`, {
    params: { rating, count },
  });

  return res.data.reviews;
};

export const useTopRatedReviews = (rating?: number, count?: number) =>
  useQuery({
    queryKey: ["top-rated-reviews"],
    queryFn: async () => await fetchTopRatedReviews(rating, count),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
