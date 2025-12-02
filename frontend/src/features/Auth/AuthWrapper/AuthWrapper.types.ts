import type { ReactNode } from "react";

type BottomLink = {
  /**
   * REQUIRED: The text to be displayed
   */
  text: string;

  /**
   * REQUIRED: The URL the link points to
   */
  url: string;
};

export interface AuthWrapperProps {
  /**
   * REQUIRED: The content to be displayed inside the AuthWrapper
   */
  children: ReactNode;
  /**
   * REQUIRED: The main title to be displayed in the AuthWrapper
   */
  title: string;
  /**
   * OPTIONAL: A message or description to be displayed below the title
   */
  message?: string | null;

  /**
   * OPTIONAL: The title to be displayed above the form
   */
  formTitle?: string | null;

  /**
   * OPTIONAL: Additional internal links to be displayed at the bottom
   * 
   * 
   * 
   * NOTE: Links are <Link> components from react-router-dom
   */
  bottomLinks?: BottomLink[];
}
