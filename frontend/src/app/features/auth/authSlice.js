import { createSlice } from "@reduxjs/toolkit";
import { login, signup, verifyEmail } from "../../../utils/api";

const initialState = {
  isAuthenticated: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isAuthenticated = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    const setAuthState = (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
    };

    builder
      .addCase(signup.fulfilled, setAuthState)
      .addCase(login.fulfilled, setAuthState)
      .addCase(verifyEmail.fulfilled, setAuthState);
  },
});

export const { logUserOut, resetErrorAndMessage } = authSlice.actions;
export default authSlice.reducer;
