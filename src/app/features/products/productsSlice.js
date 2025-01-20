import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsByCategories } from "../../../utils/api";

export const fetchProduts = createAsyncThunk(
  "products/fetchProduts",
  async (_, thunkAPI) =>
    fetchProductsByCategories(thunkAPI, [
      "beauty",
      "fragrances",
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories",
      "laptops",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "mobile-accessories",
      "motorcycle",
      "skin-care",
      "smartphones",
      "sports-accessories",
      "sunglasses",
      "tablets",
      "tops",
      "vehicle",
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ])
);

const initialState = {
  loading: true,
  products: [],
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
    incrementCartItem: (state, action) => {
      const newCart = state.cart.map((product) => {
        if (product.id === action.payload) {
          product.qty += 1;
        }
        return product;
      });
      state.cart = newCart;
    },
    decrementCartItem: (state, action) => {
      const newCart = state.cart
        .map((product) => {
          if (product.id === action.payload) {
            product.qty -= 1;
          }
          return product;
        })
        .filter((product) => product.qty > 0);
      state.cart = newCart;
    },
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
  incrementCartItem,
  decrementCartItem,
  fetchProduct,
  addItemToCart,
  removeFromCart,
  changeSectionClass,
  updateLoadingState,
} = productsSlice.actions;
export default productsSlice.reducer;
