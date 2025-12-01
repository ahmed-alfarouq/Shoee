import { useContext } from "react";

import {
  CheckoutStateContext,
  CheckoutDipatchContext,
} from "@/context/checkout/context";

export const useCheckoutState = () => {
  const ctx = useContext(CheckoutStateContext);

  if (!ctx)
    throw new Error("CheckoutContext must be inside <CheckoutProvider>");
  return ctx;
};

export const useCheckoutDispatch = () => {
  const ctx = useContext(CheckoutDipatchContext);

  if (!ctx)
    throw new Error("CheckoutDipatchContext must be inside <CheckoutProvider>");
  return ctx;
};
