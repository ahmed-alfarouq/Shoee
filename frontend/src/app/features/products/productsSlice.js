import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

import { fetchProducts } from "../../../utils/api";

const initialState = {
  products: [],
  lastUpdated: null,
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
    removeFromCart: (state, action) => {
      const ID = action.payload;
      state.cart = state.cart.filter((product) => product.id !== ID);
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.lastUpdated = Date.now();
      })
      .addCase(PURGE, (state) => {
        state = initialState;
      });
  },
});

export const {
  addItemToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} = productsSlice.actions;
export default productsSlice.reducer;
