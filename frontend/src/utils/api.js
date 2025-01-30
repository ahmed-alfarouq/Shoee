import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
const AUTH_API_URL = process.env.REACT_APP_MY_API_URL + "/auth";
const USER_API_URL = process.env.REACT_APP_MY_API_URL + "/user";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      const categories = ["mens-shirts", "mens-shoes", "mens-watches"];
      // Fetch all categories in parallel
      const responses = await Promise.all(
        categories.map((cat) =>
          axios
            .get(`${API_URL}/products/category/${cat}`)
            .then((res) => res.data.products)
        )
      );

      // Flatten the array of product arrays into a single array
      const allProducts = responses.flat();

      return allProducts;
    } catch (error) {
      // Return a detailed error for debugging
      return thunkAPI.rejectWithValue({
        message: error.message,
        stack: error.stack,
      });
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/login`, userData);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/signup`, userData);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (token, thunkAPI) => {
    try {
      const res = await axios.get(
        `${AUTH_API_URL}/verify-email?token=${token}`
      );
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  "auth/resendVerificationEmail",
  async (email, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/resend-email`, email);
      return res.data?.msg;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/forgot-password`, {
        email,
      });
      return res.data.msg;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetData, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/reset-password`, resetData);
      return res.data?.msg;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const refreshAccessToken = createAsyncThunk(
  "auth/refreshAccessToken",
  async (_, thunkAPI) => {
    try {
      const res = await axios.post(`${AUTH_API_URL}/refresh-token`);

      return res.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ avatar, token }, thunkAPI) => {
    try {
      const data = new FormData();
      data.append("avatar", avatar);

      const res = await axios.post(`${USER_API_URL}/upload-avatar`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data && error.response.data.msg
          ? error.response.data.msg
          : error.message;

      return thunkAPI.rejectWithValue({
        message: errorMessage,
        stack: error.stack,
      });
    }
  }
);
