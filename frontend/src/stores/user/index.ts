import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import {
  signIn,
  signUp,
  verifyEmail,
  updateAvatar,
  resetPassword,
  createAddress,
  removeAddress,
  updateAddress,
  forgotPassword,
  updateUsername,
  updatePassword,
  setDefaultAddress,
} from "./actions";

import asyncCatch from "@/utils/asyncCatch";

import type { UserStoreState } from "./userStore.types";

const useUserStore = create<UserStoreState>()(
  persist(
    immer((set) => ({
      user: null,
      token: null,
      actions: {
        logout: () => set({ token: null, user: null }),
        setToken: (token) => set({ token }),
        signIn: (email, password) =>
          asyncCatch(() => signIn({ set, email, password })),
        signUp: (username: string, email: string, password: string) =>
          asyncCatch(() => signUp({ email, password, username })),
        forgotPassword: (email) => asyncCatch(() => forgotPassword({ email })),
        resetPassword: (token, password) =>
          asyncCatch(() => resetPassword({ token, password })),
        verifyEmail: (token) => asyncCatch(() => verifyEmail({ token })),

        updateAvatar: (avatar) =>
          asyncCatch(() => updateAvatar({ set, file: avatar })),
        updateUsername: (username) =>
          asyncCatch(() => updateUsername({ set, newUsername: username })),
        updatePassword: (oldPassword, newPassword) =>
          asyncCatch(() => updatePassword({ oldPassword, newPassword })),

        createAddress: (address) =>
          asyncCatch(() => createAddress({ set, address })),
        updateAddress: (address) =>
          asyncCatch(() => updateAddress({ set, address })),
        removeAddress: (id) => asyncCatch(() => removeAddress({ set, id })),
        setDefaultAddress: (id) =>
          asyncCatch(() => setDefaultAddress({ set, id })),
      },
    })),
    {
      name: "user-storage",
      partialize: (state) => ({
        user: state.user,
        token: state.token,
      }),
    }
  )
);

export const useUser = () => useUserStore((state) => state.user);

export const useUserToken = () => useUserStore((state) => state.token);

export const useUserActions = () => useUserStore((state) => state.actions);

export default useUserStore;
