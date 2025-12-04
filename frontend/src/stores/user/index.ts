import { create } from "zustand";
import { persist } from "zustand/middleware";

import { signIn, signUp } from "./actions";

import asyncCatch from "@/utils/asyncCatch";

import type { UserStoreState } from "./userStore.types";

const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      actions: {
        logout: () => set({ token: null, user: null }),
        setToken: (token: string | null) => set({ token }),
        signIn: (email: string, password: string) =>
          asyncCatch(() => signIn({ set, email, password })),
        signUp: (username: string, email: string, password: string) =>
          asyncCatch(() => signUp({ email, password, username })),
      },
    }),
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
