import userApiClient from "../../../services/userApiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setLoading, setMessage } from "../main/mainSlice";

import { handleAuthError } from "../../../utils/apiUtils";

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ avatar }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const data = new FormData();
      data.append("avatar", avatar);

      const res = await userApiClient.post("/upload-avatar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      thunkAPI.dispatch(setMessage(res.data.msg));
      return res.data.avatar;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const updateUsername = createAsyncThunk(
  "user/updateUsername",
  async (username, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await userApiClient.post("/username", {
        newUsername: username,
      });
      thunkAPI.dispatch(setMessage(res.data.msg));
      return res.data.newUsername;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await userApiClient.post("/password", data);
      return thunkAPI.dispatch(setMessage(res.data.msg));
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);

export const updateBillingDetails = createAsyncThunk(
  "user/updateBillingDetails",
  async (data, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const res = await userApiClient.post("/billing-details", data);
      thunkAPI.dispatch(setMessage(res.data.msg));
      return res.data.billing_details;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);
