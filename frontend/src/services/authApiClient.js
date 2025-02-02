import axios from "axios";

import { store } from "../app/store";
import { logUserOut, setToken } from "../app/features/auth/authSlice";
import { clearUser } from "../app/features/user/userSlice";

const authApiClient = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_API_URL}/auth`,
  withCredentials: true,
});

authApiClient.interceptors.response.use(
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
      return Promise.reject(err);
    }
  }
);

export default authApiClient;
