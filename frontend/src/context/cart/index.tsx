import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

import { cartReducer } from "./reducer";

import {
  CartStateContext,
  CartDispatchContext,
  CartActionsContext,
} from "./context";

import type { Product } from "@/types/index.types";

const initalCartState = {
  items: [],
  total: 0,
};

export const CartProdiver = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initalCartState, (init) => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : init;
    } catch {
      return init;
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // helper action creators (memoized)
  const addItem = useCallback((item: Product, qty: number) => {
    dispatch({ type: "ADD_ITEM", payload: { item, qty } });
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  }, []);

  const removeItem = useCallback((id: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: "CLEAR_CART" });
  }, []);

  const actions = useMemo(
    () => ({ addItem, updateQty, removeItem, clearCart }),
    [addItem, updateQty, removeItem, clearCart]
  );

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        <CartActionsContext.Provider value={actions}>
          {children}
        </CartActionsContext.Provider>
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export default CartProdiver;
