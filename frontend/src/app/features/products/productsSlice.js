import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { product, quantity } = action.payload;
      if (quantity <= 0) return;

      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += quantity;
      } else {
        state.cart.push({ ...product, qty: quantity });
      }
    },
    removeFromCart: (state, action) => {
      const ID = action.payload;
      state.cart = state.cart.filter((item) => item.id !== ID);
    },
    incrementCartItem: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.qty++;
    },
    decrementCartItem: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }
    },
  },
});

export const {
  addItemToCart,
  removeFromCart,
  incrementCartItem,
  decrementCartItem,
} = productsSlice.actions;
export default productsSlice.reducer;
