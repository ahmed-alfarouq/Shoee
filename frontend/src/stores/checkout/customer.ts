import type { StateCreator } from "zustand";
import type { CustomerSlice } from "./checkoutStore.types";

export const createCustomerSlice: StateCreator<CustomerSlice> = (set) => ({
  address: null,

  setAddress: (address) => set({ address }),
});
