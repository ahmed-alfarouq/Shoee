export interface DropdownProps {
  /**
   * REQUIRED: Data list used to render dropdown options
   */
  list: any[] | undefined;

  /**
   * OPTIONAL: Indicates whether the dropdown is in loading state.
   * When true, the component should display a loader instead of the list.
   */
  isLoading?: boolean;

  /**
   * OPTIONAL: Error message to display when fetching or processing the list fails.
   */
  error?: string;

  /**
   * OPTIONAL: The currently selected value.
   * Used to apply `aria-selected`.
   */
  selectedValue?: string;

  /**
   * COPTIONAL: A callback fired when an item is selected.
   * Receives the selected item as its argument.
   */
  onSelect?: (item: unknown) => void;

  /**
   * OPTIONAL: Custom renderer for each dropdown item.
   * Allows full control over how each option is displayed.
   * Custom renderer is inside of a li element
   */
  renderItem?: (item: unknown) => React.ReactNode;
}
