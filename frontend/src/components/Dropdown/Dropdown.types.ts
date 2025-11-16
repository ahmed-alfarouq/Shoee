export interface DropdownProps {
  /**
   * Data list used to render dropdown options.
   * Can be an array of any items or undefined (e.g. before data is loaded).
   */
  list: [] | undefined;

  /**
   * Indicates whether the dropdown is in loading state.
   * When true, the component should display a loader instead of the list.
   */
  isLoading?: boolean;

  /**
   * Error message to display when fetching or processing the list fails.
   */
  error?: string;

  /**
   * The currently selected value.
   * Used to apply `aria-selected`.
   */
  selectedValue?: string;

  /**
   * Callback fired when an item is selected.
   * Receives the selected item as its argument.
   */
  onSelect?: (item: unknown) => void;

  /**
   * Custom renderer for each dropdown item.
   * Allows full control over how each option is displayed.
   * Custom renderer is inside of a li element
   */
  renderItem?: (item: unknown) => React.ReactNode;
}
