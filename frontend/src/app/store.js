import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import productsReducer from "./features/products/productsSlice";
import authReducer from "./features/auth/authSlice";
import userReducer from "./features/user/userSlice";

const productsPersistConfig = {
  key: "products",
  storage,
  blacklist: ["loading", "error", "message"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  blacklist: ["loading", "error", "message"],
};

const userPersistConfig = {
  key: "user",
  storage,
  blacklist: ["loading", "error", "message"],
};

// Create persisted reducers
const productsPersistedReducer = persistReducer(productsPersistConfig, productsReducer);
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);
const userPersistedReducer = persistReducer(userPersistConfig, userReducer);

// Combine reducers
const rootReducer = {
  products: productsPersistedReducer,
  auth: authPersistedReducer,
  user: userPersistedReducer,
};

export const store = configureStore({
  reducer: rootReducer,
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
