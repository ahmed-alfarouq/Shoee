import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userLogin, createNewUser } from "../../../utils/api";

export const signup = createAsyncThunk("auth/signup", async (_, thunkAPI) =>
  createNewUser(thunkAPI, _)
);

export const login = createAsyncThunk("auth/login", async (_, thunkAPI) =>
  userLogin(thunkAPI, _)
);

const initialState = {
  authrized: false,
  token: "",
  user: null,
  error: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logUserOut: (state) => {
      state.authrized = false;
      state.token = "";
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.authrized = true;
        state.error = "";
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.authrized = true;
        state.error = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { logUserOut } = authSlice.actions;
export default authSlice.reducer;
