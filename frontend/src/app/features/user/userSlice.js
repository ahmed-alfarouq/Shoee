import { createSlice } from "@reduxjs/toolkit";

import { updateAvatar } from "./userAPI";

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
    clearUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.avatar = action.payload.avatar;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
