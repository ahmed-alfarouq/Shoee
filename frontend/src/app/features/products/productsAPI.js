import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setLoading } from "../main/mainSlice";

import { handleGlobalError } from "../../../utils/apiUtils";

const PRODUCTS_API = process.env.REACT_APP_PRODUCTS_API_URL;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const categories = ["mens-shirts", "mens-shoes", "mens-watches"];
      // Fetch all categories in parallel
      const responses = await Promise.all(
        categories.map((cat) =>
          axios
            .get(`${PRODUCTS_API}/products/category/${cat}`)
            .then((res) => res.data.products)
        )
      );

      // Flatten the array of product arrays into a single array
      const allProducts = responses.flat();
      thunkAPI.dispatch(setLoading(false));
      return allProducts;
    } catch (error) {
      return handleGlobalError(error, thunkAPI);
    }
  }
);
