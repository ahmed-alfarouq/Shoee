import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const PRODUCTS_API = import.meta.env.VITE_BASE_API_URL;

const fetchProduct = async (id: string) => {
  const res = await axios.get(`${PRODUCTS_API}/products/${id}`);
  return res.data;
};

const useProduct = (id: string) =>
  useQuery({
    queryKey: [id],
    queryFn: async () => await fetchProduct(id),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

export default useProduct;
