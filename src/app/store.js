import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./features/products/productsSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["numOfItems", "cartItems", "sectionClass", "loading"],
};

const productsPersistedReducer = persistReducer(persistConfig, productsReducer);

export const store = configureStore({
  reducer: { products: productsPersistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export let persistor = persistStore(store);
