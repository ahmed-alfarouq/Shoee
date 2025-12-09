export interface TabsProps {
  /**
   * REQUIRED: The list of tab labels to render.
   * Example: ["Mens Shoes", "Mens Watches", "Mens T-shirts"]
   */
  tabs: string[];

  /**
   * REQUIRED: The currently active tab.
   * Must match one of the values in `tabs`.
   */
  activeTab: string;

  /**
   * REQUIRED: Callback fired when a tab is selected.
   * @returns tab's name
   */
  changeTab: (tab: string) => void;

  /**
   * REQUIRED: Accessible label describing the tab group.
   * Used to improve screen-reader navigation.
   */
  ariaLabel: string;

  /**
   * OPTIONAL: Extra className for the tabs wrapper
   */
  className?: string;
}
