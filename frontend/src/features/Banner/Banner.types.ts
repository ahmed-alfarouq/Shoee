import type { ComponentProps } from "react";

export interface BannerProps extends ComponentProps<"section"> {
  /**
   * Optional content to render after the description
   * Can be any valid React node (text, elements, or other components).
   */
  children?: React.ReactNode;

  /**
   * The main title of the banner.
   */
  title: string;

  /**
   * A short description or subtitle for the banner.
   */
  description: string;

  /**
   * URL or path to the image to display in the banner.
   */
  image: string;
}
