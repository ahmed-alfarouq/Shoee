import type { Address } from "@/types/index.types";
import type { WritableDraft } from "immer";

export type UserSet = (
  nextStateOrUpdater:
    | UserStoreState
    | Partial<UserStoreState>
    | ((state: WritableDraft<UserStoreState>) => void),
  shouldReplace?: false
) => unknown;

type SuccessResponse = Promise<[Error | null, { msg: string } | null]>;

export type Actions = {
  logout: () => void;
  setToken: (token: string | null) => void;
  signIn: (
    email: string,
    password: string
  ) => Promise<
    [
      Error | null,
      {
        token: string;
      } | null
    ]
  >;
  signUp: (
    email: string,
    username: string,
    password: string
  ) => Promise<
    [
      Error | null,
      {
        token: string;
      } | null
    ]
  >;
  verifyEmail: (token: string) => SuccessResponse;
  forgotPassword: (email: string) => SuccessResponse;
  resetPassword: (token: string, password: string) => SuccessResponse;

  updateAvatar: (avatar: File) => SuccessResponse;
  updateUsername: (username: string) => SuccessResponse;
  updatePassword: (oldPassword: string, newPassword: string) => SuccessResponse;

  createAddress: (address: Omit<Address, "id">) => SuccessResponse;
  updateAddress: (Address: Address) => SuccessResponse;
  removeAddress: (id: string) => SuccessResponse;
  setDefaultAddress: (id: string) => SuccessResponse;
};

export interface UserStoreState {
  token: string | null;
  actions: Actions;
}

// Actions
export interface SignInAction {
  set: UserSet;
  email: string;
  password: string;
}

export interface SignUpAction {
  email: string;
  password: string;
  username: string;
}

export interface VerifyEmailProps {
  token: string;
}

export interface ForgotPasswordAction {
  email: string;
}

export interface ResetPasswordAction {
  token: string;
  password: string;
}

export interface UpdateAvatarAction {
  set: UserSet;
  file: File;
}

export interface UpdateUsernameAction {
  set: UserSet;
  newUsername: string;
}

export interface UpdatePasswordAction {
  oldPassword: string;
  newPassword: string;
}

export interface CreateAddressAction {
  set: UserSet;
  address: Omit<Address, "id">;
}

export interface UpdateAddressAction {
  set: UserSet;
  address: Address;
}

export interface RemoveAddressAction {
  set: UserSet;
  id: string;
}

export interface SetDefaultAddressAction {
  set: UserSet;
  id: string;
}
