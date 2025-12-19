import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { addItem, removeItem, updateQty } from "./actions";

import type { CartStoreState } from "./cartStore.types";

export const useCartStore = create<CartStoreState>()(
  persist(
    immer((set) => ({
      items: [],
      total: 0,
      actions: {
        addItem: (item, qty) => addItem({ item, qty, set }),
        updateQty: (id, qty) => updateQty({ id, qty, set }),
        removeItem: (id) => removeItem({ id, set }),
        clearCart: () => set({ items: [], total: 0 }),
      },
    })),
    {
      name: "cart-storage",
    }
  )
);

export const useCartState = () => useCartStore((state) => state);

export const useCartTotal = () => useCartStore((state) => state.total);

export const useCartActions = () => useCartStore((state) => state.actions);
