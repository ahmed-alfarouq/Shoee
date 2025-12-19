import userApiClient from "@/services/userApiClient";
import authApiClient from "@/services/authApiClient";

import type { Address, User } from "@/types/index.types";

import type {
  SignInAction,
  SignUpAction,
  VerifyEmailProps,
  UpdateAvatarAction,
  CreateAddressAction,
  UpdateAddressAction,
  ResetPasswordAction,
  ForgotPasswordAction,
  UpdateUsernameAction,
  UpdatePasswordAction,
  SetDefaultAddressAction,
  RemoveAddressAction,
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

export const verifyEmail = async ({ token }: VerifyEmailProps) => {
  const res = await authApiClient.get(`verify-email?token=${token}`);

  const { msg } = res.data as { msg: string };

  return { msg };
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

// User Settings
export const updateAvatar = async ({ set, file }: UpdateAvatarAction) => {
  const data = new FormData();
  data.append("avatar", file);

  const res = await userApiClient.post("upload-avatar", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  const { msg, avatar } = res.data as { msg: string; avatar: string };

  set((state) => {
    if (!state.user) return;
    state.user.avatar = avatar;
  });

  return { msg };
};

export const updateUsername = async ({
  set,
  newUsername,
}: UpdateUsernameAction) => {
  const res = await userApiClient.post("username", { newUsername });

  const { msg, username } = res.data as { msg: string; username: string };

  set((state) => {
    if (!state.user) return;
    state.user.username = username;
  });

  return { msg };
};

export const updatePassword = async ({
  oldPassword,
  newPassword,
}: UpdatePasswordAction) => {
  const res = await userApiClient.post("password", {
    oldPassword,
    newPassword,
  });

  const { msg } = res.data as { msg: string };

  return { msg };
};

export const createAddress = async ({ set, address }: CreateAddressAction) => {
  const res = await userApiClient.post("create-address", address);

  const { msg, addresses } = res.data as { msg: string; addresses: Address[] };

  set((state) => {
    if (!state.user) return;
    state.user.addresses = addresses;
  });

  return { msg };
};

export const updateAddress = async ({ set, address }: UpdateAddressAction) => {
  const res = await userApiClient.post("update-address", address);

  const { msg, addresses } = res.data as { msg: string; addresses: Address[] };

  set((state) => {
    if (!state.user) return;
    state.user.addresses = addresses;
  });

  return { msg };
};

export const removeAddress = async ({ set, id }: RemoveAddressAction) => {
  const res = await userApiClient.post("remove-address", { id });

  const { msg, addresses } = res.data as { msg: string; addresses: Address[] };

  set((state) => {
    if (!state.user) return;
    state.user.addresses = addresses;
  });

  return { msg };
};

export const setDefaultAddress = async ({
  set,
  id,
}: SetDefaultAddressAction) => {
  const res = await userApiClient.post("default-address", { id });

  const { msg, addresses } = res.data as { msg: string; addresses: Address[] };

  set((state) => {
    if (!state.user) return;
    state.user.addresses = addresses;
  });

  return { msg };
};
