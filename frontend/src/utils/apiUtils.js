import { logUserOut } from "../app/features/auth/authSlice";
import { setAuthError, setError } from "../app/features/main/mainSlice";
import { clearUser } from "../app/features/user/userSlice";

export const handleAuthError = (error, thunkAPI) => {
  const errorMessage =
    error.response?.data?.msg ||
    error.response?.data?.message ||
    error.message ||
    "Something went wrong!";

  thunkAPI.dispatch(setAuthError(errorMessage));
  return thunkAPI.rejectWithValue(errorMessage);
};

export const handleGlobalError = (error, thunkAPI) => {
  const errorMessage = error.message || "Something went wrong!";

  thunkAPI.dispatch(setError(errorMessage));
  return thunkAPI.rejectWithValue(errorMessage);
};

export const handleUserlogout = (thunkAPI) => {
  thunkAPI.dispatch(clearUser());
  thunkAPI.dispatch(logUserOut());
  return thunkAPI.rejectWithValue("Invalid or expired refresh token!");
};
