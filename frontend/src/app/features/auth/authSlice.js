import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup, verifyEmail } from "./authAPI";

const initialState = {
  isAuthenticated: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
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
      .addCase(verifyEmail.fulfilled, setAuthState)
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.token = "";
      });
  },
});

export const { setToken, logUserOut } = authSlice.actions;
export default authSlice.reducer;
