export type FilterValues = string | number | number[];

export interface FilterProps {
  /**
   * REQUIRED: Callback fires when clicking on close icon
   */
  onClose: () => void;

  /**
   * REQUIRED: Controles show/hide filter sidebar
   */
  hidden: boolean;
}
