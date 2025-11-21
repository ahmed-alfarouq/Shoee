export interface LoadMoreButtonProps {
  /**
   * REQUIRED: Indicates if there're more pages
   * false means don't render the button
   */
  hasNextPage: boolean;

  /**
   * REQUIRED: Callback to fire on click
   */
  fetchNextPage: () => void;

  /**
   * REQUIRED: it will show a spinner if set to true
   */
  isFetchingNextPage: boolean;
}
