export interface FormMessageProps {
  /**
   * OPTIONAL: The type of the message
   * @default "error"
   */
  type?: "error" | "info" | "success";

  /**
   * OPTIONAL: The message to be displayed
   */
  message?: string | null;

  /**
   * OPTIONAL: ClassName for external styling
   */
  className?: string;
}
