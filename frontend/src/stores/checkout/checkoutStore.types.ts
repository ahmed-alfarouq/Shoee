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
  code: string | null;
  amount: number | null;

  applyCoupon: (code: string, amount: number) => void;
  removeCoupon: () => void;
}

export type CheckoutStore = PaymentSlice & CouponSlice & CustomerSlice;
