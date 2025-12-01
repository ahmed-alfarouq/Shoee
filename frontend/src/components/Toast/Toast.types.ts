export type AlertVariant = "success" | "error" | "warning" | "info";

export interface ToastProps {
  /**
   * OPTIONAL: Text content displayed inside the toast
   */
  message?: string;

  /**
   * OPTIONAL: Visual style of the toast
   * @default "success"
   */
  variant?: AlertVariant;

  /**
   * OPTIONAL: Auto-close delay in milliseconds
   * @default 3000
   */
  duration?: number;

  /**
   * OPTIONAL: Indicates if toast should disapear or not,
   * true means should disapear
   * @default true
   */
  closable?: boolean;

  /**
   * OPTIONAL: Callback fired when the toast closes
   */
  onClose?: () => void;
}
