import type { ReactNode } from "react";
import type { IconType } from "react-icons";

export interface ListOption {
  /**
   * REQUIRED: Text shown to the user inside the list button
   */
  key: string;

  /**
   * REQUIRED: The internal value used when this option is selected
   */
  value: string;

  /**
   * REQUIRED: The actuall element shown to the user
   */
  label: ReactNode;

  /**
   * OPTIONAL: Icon to display before the label
   */
  icon?: IconType;
}

export interface FilterListProps {
  /**
   * OPTIONAL: Heading displayed above the list
   */
  title?: string;

  /**
   * OPTIONAL: Array of selectable list options
   * @params {key, value, label}
   */
  options?: ListOption[];

  /**
   * OPTIONAL: Custom list to display after the title
   * if provided, options will not be rendered
   */

  children?: ReactNode;
}
