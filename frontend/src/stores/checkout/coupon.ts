import asyncCatch from "@/utils/asyncCatch";

import { applyCoupon } from "./actions";

import type { StateCreator } from "zustand";
import type { CouponSlice } from "./checkoutStore.types";

export const createCouponSlice: StateCreator<CouponSlice> = (set) => ({
  couponCode: null,
  discount: null,

  applyCoupon: (coupon) => asyncCatch(() => applyCoupon({ set, coupon })),
  removeCoupon: () => set({ couponCode: null, discount: null }),
});
