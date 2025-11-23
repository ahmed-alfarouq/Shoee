import { createContext, type Dispatch } from "react";

import type { Actions, CartActions, CartState } from "./index.types";

export const CartStateContext = createContext<CartState | undefined>(undefined);

export const CartDispatchContext = createContext<
  Dispatch<CartActions> | undefined
>(undefined);

export const CartActionsContext = createContext<Actions | undefined>(undefined);