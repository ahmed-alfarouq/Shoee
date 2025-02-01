import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  authError: "",
  error: "",
  message: "",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setAuthError: (state, action) => {
      state.authError = action.payload;
      state.message = "";
      state.loading = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
      state.authError = "";
      state.loading = false;
    },
    clearAuthError: (state) => {
      state.authError = "";
    },
    clearMessage: (state) => {
      state.message = "";
    },
    clearAll: (state) => {
      state.authError = "";
      state.message = "";
    },
  },
});

export const {
  setLoading,
  setError,
  setAuthError,
  setMessage,
  clearAuthError,
  clearMessage,
  clearAll,
} = mainSlice.actions;

export default mainSlice.reducer;
