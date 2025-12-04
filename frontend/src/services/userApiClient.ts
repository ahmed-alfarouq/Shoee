import axios from "axios";

import useUserStore from "@/stores/user";

const userApiClient = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}/user`,
  withCredentials: true,
});

userApiClient.interceptors.request.use(
  (config) => {
    const token = useUserStore.getState().token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

userApiClient.interceptors.response.use(
  (res) => {
    const setToken = useUserStore.getState().actions.setToken;

    if (res.headers["authorization"]) {
      const newToken = res.headers["authorization"].split(" ")[1];
      document.cookie = `token=${newToken}; path=/;`;

      setToken(newToken);
    }

    return res;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      const logout = useUserStore.getState().actions.logout;
      logout();
    }
    return Promise.reject(error);
  }
);

export default userApiClient;
