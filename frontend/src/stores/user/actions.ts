import authApiClient from "@/services/authApiClient";

import type { User } from "@/types/index.types";

import type { SignInAction, SignUpAction } from "./userStore.types";

export const signIn = async ({ set, email, password }: SignInAction) => {
  const res = await authApiClient.post("login", { email, password });
  const { token, user } = res.data;

  set({ token, user });

  return { token, user } as { token: string; user: User };
};

export const signUp = async ({
  email,
  password,
  username,
}: SignUpAction) => {
  const res = await authApiClient.post("signup", {
    email,
    password,
    username,
  });
  const { token, user } = res.data;

  return { token, user } as { token: string; user: User };
};
