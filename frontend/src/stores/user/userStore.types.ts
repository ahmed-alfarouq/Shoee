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

type SuccessAddressResponse = Promise<
  [Error | null, { msg: string; addresses: Address[] } | null]
>;
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

  createAddress: (address: Omit<Address, "id">) => SuccessAddressResponse;
  updateAddress: (Address: Address) => SuccessAddressResponse;
  removeAddress: (id: string) => SuccessAddressResponse;
  setDefaultAddress: (id: string) => SuccessAddressResponse;
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
  file: File;
}

export interface UpdateUsernameAction {
  newUsername: string;
}

export interface UpdatePasswordAction {
  oldPassword: string;
  newPassword: string;
}

export interface CreateAddressAction {
  address: Omit<Address, "id">;
}

export interface UpdateAddressAction {
  address: Address;
}

export interface RemoveAddressAction {
  id: string;
}

export interface SetDefaultAddressAction {
  id: string;
}
