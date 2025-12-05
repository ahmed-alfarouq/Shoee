import authApiClient from "@/services/authApiClient";

import type { User } from "@/types/index.types";

import type {
  SignInAction,
  SignUpAction,
  ResetPasswordAction,
  ForgotPasswordAction,
} from "./userStore.types";

export const signIn = async ({ set, email, password }: SignInAction) => {
  const res = await authApiClient.post("login", { email, password });
  const { token, user } = res.data as { token: string; user: User };

  if (!user.isVerified) return { token, user };

  set({ token, user });

  return { token, user };
};

export const signUp = async ({ email, password, username }: SignUpAction) => {
  const res = await authApiClient.post("signup", {
    email,
    password,
    username,
  });
  const { token, user } = res.data as { token: string; user: User };

  return { token, user };
};

export const forgotPassword = async ({ email }: ForgotPasswordAction) => {
  const res = await authApiClient.post("forgot-password", {
    email,
  });
  const { msg } = res.data as { msg: string };

  return { msg };
};

export const resetPassword = async ({
  token,
  password,
}: ResetPasswordAction) => {
  const res = await authApiClient.post("reset-password", {
    token,
    password,
  });
  const { msg } = res.data as { msg: string };

  return { msg };
};
