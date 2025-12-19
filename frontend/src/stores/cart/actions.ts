import type { Product } from "@/types/index.types";
import type {
  CartStoreState,
  AddItemAction,
  UpdateQtyAction,
  RemoveItemAction,
} from "./cartStore.types";

const calculateTotal = (state: CartStoreState) => {
  state.total = state.items.reduce(
    (acc: number, curr: Product) => acc + curr.price * curr.qty,
    0
  );
};

export const addItem = ({ item, qty, set }: AddItemAction) =>
  set((state) => {
    const exists = state.items.find((i) => i.id === item.id);

    if (exists) {
      exists.qty += qty;
    } else {
      state.items.push({ ...item, qty });
    }

    calculateTotal(state);
  });

export const updateQty = ({ id, qty, set }: UpdateQtyAction) =>
  set((state) => {
    state.items = state.items.map((item) => {
      if (item.id === id) {
        item.qty = qty;
      }
      return item;
    });

    calculateTotal(state);
  });

export const removeItem = ({ id, set }: RemoveItemAction) =>
  set((state) => {
    state.items = state.items.filter((i) => i.id !== id);

    calculateTotal(state);
  });
