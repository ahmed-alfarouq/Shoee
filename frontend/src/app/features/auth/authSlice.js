import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  signup,
  resendVerificationEmail,
  verifyEmail,
  forgotPassword,
  resetPassword,
} from "../../../utils/api";

const initialState = {
  isAuthenticated: false,
  token: "",
  error: "",
  loading: false,
  message: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.isAuthenticated = false;
      state.token = "";
      state.error = "";
    },
    resetErrorAndMessage: (state) => {
      state.error = "";
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    const setLoading = (state) => {
      state.loading = true;
      state.error = "";
      state.message = "";
    };

    const setError = (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "An error occurred";
      state.message = "";
    };

    const setAuthState = (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = "";
      state.message = "";
    };

    builder
      .addCase(signup.pending, setLoading)
      .addCase(signup.fulfilled, setAuthState)
      .addCase(signup.rejected, setError)
      .addCase(login.pending, setLoading)
      .addCase(login.fulfilled, setAuthState)
      .addCase(login.rejected, setError)
      .addCase(verifyEmail.pending, setLoading)
      .addCase(verifyEmail.fulfilled, setAuthState)
      .addCase(verifyEmail.rejected, setError)
      .addCase(resendVerificationEmail.pending, setLoading)
      .addCase(resendVerificationEmail.fulfilled, (state, action) => {
        state.message = action.payload;
        state.loading = false;
      })
      .addCase(resendVerificationEmail.rejected, setError)
      .addCase(forgotPassword.pending, setLoading)
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.message = action.payload;
        state.loading = false;
        state.error = "";
      })
      .addCase(forgotPassword.rejected, setError)
      .addCase(resetPassword.pending, setLoading)
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.error = "";
        state.message = "";
        state.loading = false;
      })
      .addCase(resetPassword.rejected, setError);
      // .addCase(refreshAccessToken.fulfilled, (state, action) => {
      //   state.token = action.payload.accessToken;
      //   console.log(state.token);
      // })
      // .addCase(refreshAccessToken.rejected, setError);
  },
});

export const { logUserOut, resetErrorAndMessage } = authSlice.actions;
export default authSlice.reducer;
