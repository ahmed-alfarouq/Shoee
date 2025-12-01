// DATA
export type ROLES = "admin" | "customer";

export type BillingDetails = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  state: string;
  zipCode: string;
  streetName: string;
  apartment: string;
  phoneNumber: string;
};

export type User = {
  id: string;
  username: string;
  avatar: string | null;
  email: string;
  role: ROLES;
  billing_details: BillingDetails;
  isVerified: boolean;
};

export type Product = {
  id: string;
  qty: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  tags: string[];
  price: number;
  discountPercentage: number;
  stock: number;
  rating: number;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  shippingInformation: string;
  availabilityStatus: string;
  returnPolicy: string;
  warrantyInformation: string;
  images: string[];
  thumbnail: string;
  reviews: Review[];

  createdAt: string;
};

export type Review = {
  id: string;
  user: User;
  product: Product;
  rating: number;
  comment: string;
};

// API Responses
export interface ProductsResponse {
  /**
   * The array of returned products for the current page.
   */
  products: Product[];

  /**
   * Cursor for fetching the next page.
   * `null` when no additional pages exist.
   */
  nextCursor: string | null;

  /**
   * Indicates whether more pages are available after this response.
   */
  hasMore: boolean;

  /**
   * Number of products included in this response.
   */
  count: number;

  /**
   * Total number of products available for the same query,
   * regardless of pagination.
   */
  totalCount: number;
}

/**
 * Components
 */
export interface FilterOptions {
  s?: string;
  limit?: number;
  rating?: string[];
  cursor?: string;
  exclude?: string[];
  category?: string[];
  price?: number[];
  discountPercentage?: number;
}
