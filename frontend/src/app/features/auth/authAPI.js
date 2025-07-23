import authApiClient from "services/authApiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { clearUser } from "../user/userSlice";
import { setAuthError, setLoading, setMessage } from "../main/mainSlice";

import { handleAuthError, handleGlobalError } from "utils/apiUtils";

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setAuthError(""));
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.post("login", userData);
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authApiClient.post("logout");
    thunkAPI.dispatch(clearUser());
  } catch (error) {
    return handleGlobalError(error, thunkAPI);
  }
});

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.post("/signup", userData);
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  "auth/verifyEmail",
  async (token, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.get(`/verify-email?token=${token}`);
      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk(
  "auth/resendVerificationEmail",
  async (email, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.post("/resend-email", email);
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.post("/forgot-password", {
        email,
      });
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (resetData, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await authApiClient.post("/reset-password", resetData);
      thunkAPI.dispatch(setMessage(res.data?.msg));
      return thunkAPI.dispatch(setLoading(false));
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);
