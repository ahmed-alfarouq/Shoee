import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduts = createAsyncThunk(
  "products/fetchProduts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(process.env.REACT_APP_API_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  loading: true,
  products: [],
  error: "",
  numOfItems: 1,
  id: 1,
  cart: [],
  sectionClass: "all",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increaseNumOfItems: (state) => state.numOfItems++,
    decreaseNumOfItems: (state) => state.numOfItems--,
    fetchProduct: (state, action) => {},
    addItemToCart: (state, action) => {},
    removeFromCart: (state, action) => {},
    changeSectionClass: (state, action) => {},
    updateLoadingState: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          state.error = "";
        } else {
          state.error = "Something went wrong after fullfilling the request!";
        }
        state.loading = false;
      })
      .addCase(fetchProduts.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const {
  increaseNumOfItems,
  decreaseNumOfItems,
  fetchProduct,
  addItemToCart,
  removeFromCart,
  changeSectionClass,
  updateLoadingState,
} = productsSlice.actions;
export default productsSlice.reducer;
