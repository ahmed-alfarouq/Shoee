import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
