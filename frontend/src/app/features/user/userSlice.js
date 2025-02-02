import { createSlice } from "@reduxjs/toolkit";

import { updateAvatar, updateBillingDetails, updateUsername } from "./userAPI";

const initialState = {
  username: "",
  verified: null,
  avatar: "",
  email: "",
  role: "",
  billingDetails: {
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    state: "",
    zip_code: "",
    street_name: "",
    apartment: "",
    phone_number: "",
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
      state.billingDetails = billing_details;
    },
    clearUser: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.avatar = action.payload;
      })
      .addCase(updateUsername.fulfilled, (state, action) => {
        state.username = action.payload;
      })
      .addCase(updateBillingDetails.fulfilled, (state, action) => {
        state.billingDetails = action.payload;
      });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
