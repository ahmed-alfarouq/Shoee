import axios from "axios";

import useUserStore from "@/stores/user";

const authApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}/auth`,
  withCredentials: true,
});

authApiClient.interceptors.response.use(
  (res) => {
    const token = res.headers["authorization"]?.split(" ")[1];

    if (token) {
      useUserStore.getState().actions.setToken(token);
    }

    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authApiClient;
