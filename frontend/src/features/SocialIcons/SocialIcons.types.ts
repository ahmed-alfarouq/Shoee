import type { IconType } from "react-icons";

type Directions = "vertical" | "horizontal";

type Item = {
  to: string;
  name: string;
  icon: IconType;
};

export interface SocialIconsProps {
  /**
   * REQUIRED: Array of menu items
   */
  items: Item[];

  /**
   * OPTIONAL: Array of menu items
   * @default "vertical"
   */
  direction?: Directions;

  /**
   * OPTIONAL: For custom styles to the main nav container
   */
  className?: string;
}
