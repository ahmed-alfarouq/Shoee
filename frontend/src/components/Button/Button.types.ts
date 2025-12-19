import React from "react";

/**
 * Defines the allowed sizes for the button.
 * Maps to SCSS classes like .sm, .md, .lg.
 */
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ComponentProps<"button"> {
  /**
   * The content to be rendered inside the button (text, icon, etc.).
   */
  children: React.ReactNode;

  /**
   * OPTIONAL: Enables polymorphic behavior for the component.
   * When `asChild` is true, the component will render **only its child element**,
   * allowing the child to become the rendered element instead of the component’s default wrapper.
   */
  asChild?: boolean;

  /**
   * OPTIONAL: Shows a loading spinner and disables interaction.
   * The button's text is typically replaced by a loading indicator.
   */
  isLoading?: boolean;
}
