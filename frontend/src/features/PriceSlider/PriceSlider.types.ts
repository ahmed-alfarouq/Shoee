export interface PriceSliderProps {
  /**
   * REQUIRED: Current selected price range.
   * Example: [10, 50]
   */
  value: number[];

  /**
   * REQUIRED: Minimum allowed price.
   */
  min: number;

  /**
   * REQUIRED: Maximum allowed price.
   */
  max: number;

  /**
   * Fired whenever the user changes the selected price range.
   * Receives the updated range as a two-element array [min, max].
   */
  onChange: (value: number[]) => void;
}
