type ErrorSuccessMessage = Promise<[Error | null, { msg: string } | null]>;

export interface CustomerState {
  email: string;
  name: string;
  address: {
    city: string;
    street: string;
    zipCode: string;
    country: string;
    apartment?: string;
    phoneNumber: string;
  } | null;
}

export interface CustomerActions {
  setCustomer(data: CustomerState): void;
  setAddress(address: CustomerState["address"]): void;
  resetCustomer(): void;
}

export type CustomerSlice = CustomerState & CustomerActions;

export type PaymentMethod = "cash" | "stripe" | null;

export interface PaymentSlice {
  paymentMethod: PaymentMethod;

  setPaymentMethod: (method: PaymentMethod) => void;
}

export interface CouponSlice {
  couponCode: string | null;
  discount: number | null;

  applyCoupon: (couponCode: string) => ErrorSuccessMessage;
  removeCoupon: () => void;
}

export type CheckoutStore = PaymentSlice & CouponSlice & CustomerSlice;

export type CheckoutSet = (
  nextStateOrUpdater: CheckoutStore | Partial<CheckoutStore>,
  shouldReplace?: false
) => void;

// Actions
export interface ApplyCouponAction {
  coupon: string;
  set: CheckoutSet;
}
