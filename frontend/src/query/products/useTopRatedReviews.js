import axios from "axios";

import { useQuery } from "@tanstack/react-query";

const PRODUCTS_API = process.env.REACT_APP_BASE_API_URL;

export const fetchTopRatedReviews = async (rating, count) => {
  const res = await axios.get(`${PRODUCTS_API}/products/reviews/top`, {
    params: { rating, count },
  });

  return res.data.reviews;
};

export const useTopRatedReviews = (rating, count) =>
  useQuery({
    queryKey: ["top-rated-reviews"],
    queryFn: async () => await fetchTopRatedReviews(rating, count),
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
