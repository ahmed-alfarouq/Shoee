import type { WritableDraft } from "immer";

import type { Product } from "@/types/index.types";

export type CartSet = (
  nextStateOrUpdater:
    | CartStoreState
    | Partial<CartStoreState>
    | ((state: WritableDraft<CartStoreState>) => void),
  shouldReplace?: false
) => unknown;

export type Actions = {
  addItem: (item: Product, qty: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export interface CartStoreState {
  items: Product[];
  total: number;
  actions: Actions;
}

export interface AddItemAction {
  item: Product;
  qty: number;
  set: CartSet;
}

export interface UpdateQtyAction {
  id: string;
  qty: number;
  set: CartSet;
}

export interface RemoveItemAction {
  id: string;
  set: CartSet;
}
