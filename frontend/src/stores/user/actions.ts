import authApiClient from "@/services/authApiClient";

import type { User } from "@/types/index.types";

import type { UserStoreState } from "./userStore.types";

export const signIn = async (
  set: (partial: Partial<UserStoreState>) => void,
  email: string,
  password: string
) => {
  const res = await authApiClient.post("login", { email, password });
  const { token, user } = res.data;

  set({ token, user });

  return { token, user } as { token: string; user: User };
};
