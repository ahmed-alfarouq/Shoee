import type { ComponentProps } from "react";

export interface RatingStarsProps extends ComponentProps<"div"> {
  /**
   * OPTIONAL: Product title used exclusively for screen readers.
   */
  title?: string;

  /**
   * REQUIRED: The product’s rating value.
   */
  rating: number;

  /**
   * OPTIONAL: The maximum rating scale.
   * Determines how many stars should be rendered visually.
   * @default 5
   */
  maxRating?: number;

  /**
   * OPTIONAL: Custom class name for the wrapper element.
   */
  className?: string;
}
