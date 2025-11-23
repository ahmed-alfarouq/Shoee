import { useContext } from "react";

import {
  CartStateContext,
  CartActionsContext,
  CartDispatchContext,
} from "@/context/cart/context";

export const useCartState = () => {
  const ctx = useContext(CartStateContext);
  if (!ctx) throw new Error("useCartState must be used inside CartProvider");
  return ctx;
};

export const useCartDispatch = () => {
  const ctx = useContext(CartDispatchContext);
  if (!ctx) throw new Error("useCartDispatch must be used inside CartProvider");
  return ctx;
};

export function useCartActions() {
  const ctx = useContext(CartActionsContext);
  if (!ctx) throw new Error("useCartActions must be inside <CartProvider>");
  return ctx;
}
