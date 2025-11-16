/**
 * DATA
 */
export interface ProductProps {
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
}

// API Responses
export interface ProductsResponse {
  /**
   * The array of returned products for the current page.
   */
  products: ProductProps[];

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
  rating?: number;
  cursor?: string;
  category?: string;
  minPrice?: string;
  maxPrice?: string;
  discountPercentage?: number;
}
