import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleGlobalError, handleAuthError } from "./apiUtils";

import {
  setLoading,
  setMessage,
} from "../app/features/main/mainSlice";

const API_URLS = {
  PRODUCTS: process.env.REACT_APP_PRODUCTS_API_URL,
  AUTH: `${process.env.REACT_APP_BASE_API_URL}/auth`,
  USER: `${process.env.REACT_APP_BASE_API_URL}/user`,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const categories = ["mens-shirts", "mens-shoes", "mens-watches"];
      // Fetch all categories in parallel
      const responses = await Promise.all(
        categories.map((cat) =>
          axios
            .get(`${API_URLS.PRODUCTS}/products/category/${cat}`)
            .then((res) => res.data.products)
        )
      );

      // Flatten the array of product arrays into a single array
      const allProducts = responses.flat();
      thunkAPI.dispatch(setLoading(false));
      return allProducts;
    } catch (error) {
      handleGlobalError(error, thunkAPI);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.post(`${API_URLS.AUTH}/login`, userData);
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.post(`${API_URLS.AUTH}/signup`, userData);
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (token, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.get(
        `${API_URLS.AUTH}/verify-email?token=${token}`
      );
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  "auth/resendVerificationEmail",
  async (email, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.post(`${API_URLS.AUTH}/resend-email`, email);
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.post(`${API_URLS.AUTH}/forgot-password`, {
        email,
      });
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await axios.post(
        `${API_URLS.AUTH}/reset-password`,
        resetData
      );
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URLS.AUTH}/refresh-token`);

      return res.data;
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ avatar, token }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const data = new FormData();
      data.append("avatar", avatar);

      const res = await axios.post(`${API_URLS.USER}/upload-avatar`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      thunkAPI.dispatch(setMessage(res.data?.msg));
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      handleAuthError(error, thunkAPI);
    }
  }
);
