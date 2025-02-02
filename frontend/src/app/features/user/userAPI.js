import userApiClient from "../../../services/userApiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setLoading } from "../main/mainSlice";

import { handleAuthError } from "../../../utils/apiUtils";

export const updateAvatar = createAsyncThunk(
  "user/updateAvatar",
  async ({ avatar, token }, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const data = new FormData();
      data.append("avatar", avatar);

      const res = await userApiClient.post("/upload-avatar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      thunkAPI.dispatch(setLoading(false));
      return res.data;
    } catch (error) {
      return handleAuthError(error, thunkAPI);
    }
  }
);
