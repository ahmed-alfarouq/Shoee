import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./features/products/productsSlice";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["loading", "error", "message"],
};

const productsPersistedReducer = persistReducer(persistConfig, productsReducer);
const authPersistedReducer = persistReducer(persistConfig, authReducer);
const userPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    products: productsPersistedReducer,
    auth: authPersistedReducer,
    user: userPersistedReducer,
  },
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
