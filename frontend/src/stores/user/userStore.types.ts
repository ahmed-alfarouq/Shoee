import type { User } from "@/types/index.types";

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
};

export interface UserStoreState {
  user: User | null;
  token: string | null;
  actions: Actions;
}
