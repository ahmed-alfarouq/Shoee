import axios from "axios";
import { store } from "../app/store";
import { logUserOut, setToken } from "../app/features/auth/authSlice";
import { clearUser } from "../app/features/user/userSlice";

const userApiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/user`,
  withCredentials: true,
});

userApiClient.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

userApiClient.interceptors.response.use(
  (res) => {
    if (res.headers.authorization) {
      const newToken = res.headers.authorization.split(" ")[1];
      store.dispatch(setToken(newToken));
    }
    return res;
  },
  async (err) => {
    if (err.response.status === 403) {
      store.dispatch(clearUser());
      store.dispatch(logUserOut());
    }
    return Promise.reject(err);
  }
);

export default userApiClient;
