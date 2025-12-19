import userApiClient from "@/services/userApiClient";

import type { ApplyCouponAction } from "./checkoutStore.types";

export const applyCoupon = async ({ set, coupon }: ApplyCouponAction) => {
  const res = await userApiClient.post("coupon", { coupon });

  set({
    couponCode: coupon,
    discount: res.data.discount,
  });

  return { msg: res.data.msg };
};
