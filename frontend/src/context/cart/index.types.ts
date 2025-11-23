import type { Product } from "@/types/index.types";

export type CartState = {
  items: Product[];
  total: number;
};

export type CartActions =
  | { type: "ADD_ITEM"; payload: { item: Product; qty: number } }
  | { type: "REMOVE_ITEM"; payload: { id: Product["id"] } }
  | { type: "UPDATE_QTY"; payload: { id: Product["id"]; qty: number } }
  | { type: "CLEAR_CART" };

export type Actions = {
  addItem: (item: Product, qty: number) => void;
  updateQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};
