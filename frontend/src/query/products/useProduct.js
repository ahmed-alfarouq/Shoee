import axios from "axios";
import { useQuery } from "@tanstack/react-query";



const PRODUCTS_API = process.env.REACT_APP_BASE_API_URL;

const fetchProduct = async (id) => {
    const res = await axios.get(`${PRODUCTS_API}/products/${id}`);
    return res.data;
}

const useProduct = (id) => useQuery({
    queryKey: [id],
    queryFn: async () => await fetchProduct(id),
    staleTime: 1000 * 60 * 60,
    cacheTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
})

export default useProduct;