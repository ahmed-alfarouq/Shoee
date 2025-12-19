import type { IconType } from "react-icons";

type Directions = "vertical" | "horizontal";

type Item = {
  to: string;
  name: string;
  icon?: IconType;
};

export interface NavMenuProps {
  /**
   * REQUIRED: Array of menu items
   */
  items: Item[];

  /**
   * OPTIONAL: Layout direction of the menu links
   * @default "vertical"
   */
  direction?: Directions;
}
