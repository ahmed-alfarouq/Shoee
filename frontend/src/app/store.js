import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./features/products/productsSlice";
import authReducer from "./features/auth/authSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["numOfItems", "cartItems", "loading", "error"],
};

const productsPersistedReducer = persistReducer(persistConfig, productsReducer);
const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: { products: productsPersistedReducer, auth: authPersistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
        ],
      },
    }),
});

export let persistor = persistStore(store);
