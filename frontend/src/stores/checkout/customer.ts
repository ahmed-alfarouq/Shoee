import type { StateCreator } from "zustand";
import type { CustomerSlice } from "./checkoutStore.types";

export const createCustomerSlice: StateCreator<CustomerSlice> = (set) => ({
  email: "",
  name: "",
  address: null,

  setCustomer: (data) => set(() => ({ ...data })),
  setAddress: (address) => set({ address }),
  resetCustomer: () =>
    set({
      email: "",
      name: "",
      address: null,
    }),
});
