import type { StateCreator } from "zustand";
import type { CouponSlice } from "./checkoutStore.types";

export const createCouponSlice: StateCreator<CouponSlice> = (set) => ({
  code: null,
  amount: null,

  applyCoupon: (code, amount) => set({ code, amount }),
  removeCoupon: () => set({ code: null, amount: null }),
});
