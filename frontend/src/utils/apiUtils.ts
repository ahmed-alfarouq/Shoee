import { clearUser } from "@/app/features/user/userSlice";
import { setAuthError, setError } from "@/app/features/main/mainSlice";
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";
import type { AxiosError } from "axios";

type ThunkAPI = {
  dispatch: ThunkDispatch<any, any, UnknownAction>;
  rejectWithValue: (value: string) => unknown;
};

export const handleAuthError = (error: Error, thunkAPI: ThunkAPI) => {
  const axiosError = error as AxiosError<any>;

  const errorMessage =
    axiosError?.response?.data?.msg ||
    axiosError?.response?.data?.message ||
    axiosError?.response?.data?.errors?.[0]?.msg ||
    axiosError?.message ||
    "Something went wrong!";

  thunkAPI.dispatch(setAuthError(errorMessage));
  return thunkAPI.rejectWithValue(errorMessage);
};

export const handleGlobalError = (error: Error, thunkAPI: ThunkAPI) => {
  const errorMessage = error.message || "Something went wrong!";

  thunkAPI.dispatch(setError(errorMessage));
  return thunkAPI.rejectWithValue(errorMessage);
};

export const handleUserlogout = (thunkAPI: ThunkAPI) => {
  thunkAPI.dispatch(clearUser());
  return thunkAPI.rejectWithValue("Invalid or expired refresh token!");
};
