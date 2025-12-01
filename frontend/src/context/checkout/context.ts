import { createContext, type Dispatch } from "react";

import type { CheckoutAction, CheckoutStateProps } from "./index.types";

export const CheckoutStateContext = createContext<
  CheckoutStateProps | undefined
>(undefined);

export const CheckoutDipatchContext = createContext<
  Dispatch<CheckoutAction> | undefined
>(undefined);
