import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsByCategories } from "../../../utils/api";

export const fetchProduts = createAsyncThunk(
  "products/fetchProduts",
  async (_, thunkAPI) =>
    fetchProductsByCategories(thunkAPI, [
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
    ])
);

const initialState = {
  loading: true,
  products: [],
  lastUpdated: null,
  errorMessage: "",
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
    updateLoadingState: (state, action) => {
      state.loading = action.payload;
    },
    fetchProduct: (state, action) => {},
    addItemToCart: (state, action) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return;
      }

      let product = state.cart.find((product) => product.id === id);

      if (product) {
        state.cart = state.cart.map((item) => {
          if (item.id === id) {
            item.qty += quantity;
          }
          return item;
        });
        return;
      }
      product = state.products.find((product) => product.id === id);
      if (product) {
        state.cart.push({ ...product, qty: quantity });
      }
    },
    incrementCartItem: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload) {
          product.qty += 1;
        }
        return product;
      });
    },
    decrementCartItem: (state, action) => {
      state.cart = state.cart
        .map((product) => {
          if (product.id === action.payload) {
            product.qty -= 1;
          }
          return product;
        })
        .filter((product) => product.qty > 0);
    },
    removeFromCart: (state, action) => {
      const ID = action.payload;
      state.cart = state.cart.filter((product) => product.id !== ID);
    },
    changeSectionClass: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProduts.fulfilled, (state, action) => {
        if (action.payload) {
          state.products = action.payload;
          state.lastUpdated = Date.now();
          state.errorMessage = "";
        } else {
          state.errorMessage =
            "Something went wrong after fullfilling the request!";
        }
        state.loading = false;
      })
      .addCase(fetchProduts.rejected, (state, action) => {
        state.errorMessage = `Fetching products rejected: ${action.payload.message}`;
        state.loading = false;

        // This is for developers
        // console.log(action.payload.stack);
      });
  },
});

export const {
  increaseNumOfItems,
  decreaseNumOfItems,
  updateLoadingState,
  incrementCartItem,
  decrementCartItem,
  fetchProduct,
  addItemToCart,
  removeFromCart,
  changeSectionClass,
} = productsSlice.actions;
export default productsSlice.reducer;
