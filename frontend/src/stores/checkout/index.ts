import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createCouponSlice } from "./coupon";
import { createPaymentSlice } from "./payment";
import { createCustomerSlice } from "./customer";

import type { CheckoutStore } from "./checkoutStore.types";

export const useCheckoutStore = create<CheckoutStore>()(
  persist(
    (...s) => ({
      ...createCouponSlice(...s),
      ...createPaymentSlice(...s),
      ...createCustomerSlice(...s),
    }),
    { name: "checkout-store" }
  )
);

export const useCheckoutState = () => useCheckoutStore((state) => state);

export const useCheckoutActions = (): Pick<
  CheckoutStore,
  | "setAddress"
  | "setCustomer"
  | "applyCoupon"
  | "removeCoupon"
  | "resetCustomer"
  | "setPaymentMethod"
> => {
  const applyCoupon = useCheckoutStore((state) => state.applyCoupon);
  const removeCoupon = useCheckoutStore((state) => state.removeCoupon);
  const setCustomer = useCheckoutStore((state) => state.setCustomer);
  const setAddress = useCheckoutStore((state) => state.setAddress);
  const resetCustomer = useCheckoutStore((state) => state.resetCustomer);
  const setPaymentMethod = useCheckoutStore((state) => state.setPaymentMethod);

  return {
    applyCoupon,
    removeCoupon,
    setCustomer,
    setAddress,
    resetCustomer,
    setPaymentMethod,
  };
};
