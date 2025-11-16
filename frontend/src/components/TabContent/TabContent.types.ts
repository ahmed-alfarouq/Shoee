export interface TabContentProps {
  /**
   * REQUIRED: the tab content
   */
  children: React.ReactNode;

  /**
   * REQUIRED: the currently active tab
   */
  activeTab: string;

  /**
   * OPTIONAL: Inline custom grid columns
   */
  gridTemplateColumns?: string;
}
