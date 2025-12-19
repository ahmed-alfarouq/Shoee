export interface QtySelectorProps {
  /**
   * REQUIRED: The main amount
   */
  count: number;
  /**
   * REQUIRED: A function that increases the value
   */
  increment: () => void;
  /**
   * REQUIRED: A function that decreases the value
   */
  decrement: () => void;
}
