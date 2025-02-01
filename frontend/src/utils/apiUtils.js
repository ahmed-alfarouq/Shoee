import { setAuthError } from "../app/features/main/mainSlice";

export const handleAuthError = (error, thunkAPI) => {
  const errorMessage =
    error.response?.data?.msg ||
    error.response?.data?.message ||
    error.message ||
    "Something went wrong!";

  return thunkAPI.dispatch(setAuthError(errorMessage));
};

export const handleGlobalError = (error, thunkAPI) => {
  const errorMessage = error.message || "Something went wrong!";

  return thunkAPI.dispatch(setAuthError(errorMessage));
};
