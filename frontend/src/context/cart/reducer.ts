import type { CartActions, CartState } from "./index.types";

export const cartReducer = (
  state: CartState,
  action: CartActions
): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, qty } = action.payload;

      const exists = state.items.find((i) => i.id === item.id);

      const items = exists
        ? state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + qty } : i
          )
        : [...state.items, { ...item, qty }];

      const total = items.reduce((PV, item) => PV + item.price * item.qty, 0);
      return { items, total };
    }

    case "REMOVE_ITEM": {
      const items = state.items.filter((i) => i.id !== action.payload.id);
      const total = items.reduce((s, it) => s + it.price * it.qty, 0);
      return { items, total };
    }

    case "UPDATE_QTY": {
      const { id, qty } = action.payload;

      let items;

      if (qty <= 0) {
        items = state.items.filter((item) => {
          if (item.id !== id) return item;
        });
      } else {
        items = state.items.map((item) => {
          if (item.id !== id) return item;
          return { ...item, qty };
        });
      }

      const total = items.reduce((s, it) => s + it.price * it.qty, 0);

      return { items, total };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    default:
      return state;
  }
};
