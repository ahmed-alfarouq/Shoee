import { createSlice } from "@reduxjs/toolkit";
import { updateAvatar } from "../../../utils/api";

const initialState = {
  username: "",
  verified: null,
  avatar: "",
  email: "",
  role: "",
  billing_details: {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    street_name: "",
    apartment: "",
  },
  error: "",
  message: "",
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, isVerified, avatar, email, role, billing_details } =
        action.payload;

      state.username = username;
      state.verified = isVerified;
      state.avatar = avatar;
      state.email = email;
      state.role = role;
      state.billing_details = billing_details;
    },
    clearUser: (state) => {
      state.username = "";
      state.verified = null;
      state.avatar = "";
      state.email = "";
      state.role = "";
      state.billing_details = {
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        state: "",
        zip_code: "",
        street_name: "",
        apartment: "",
      };
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
      state.error = action.payload.message;
      state.message = "";
    };
    builder
      .addCase(updateAvatar.pending, setLoading)
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = action.payload.msg;
        state.avatar = action.payload.avatar;
      })
      .addCase(updateAvatar.rejected, setError);
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
