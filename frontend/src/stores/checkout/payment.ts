import type { StateCreator } from "zustand";
import type { PaymentSlice } from "./checkoutStore.types";

export const createPaymentSlice: StateCreator<PaymentSlice> = (set) => ({
  paymentMethod: null,

  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
});
