import type { User } from "@/types/index.types";

export type UserSet = (partial: Partial<UserStoreState>) => void;

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
        user: User;
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
        user: User;
      } | null
    ]
  >;
  forgotPassword: (
    email: string
  ) => Promise<[Error | null, { msg: string } | null]>;
  resetPassword: (
    token: string,
    password: string
  ) => Promise<[Error | null, { msg: string } | null]>;
};

export interface UserStoreState {
  user: User | null;
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

export interface ForgotPasswordAction {
  email: string;
}

export interface ResetPasswordAction {
  token: string;
  password: string;
}
