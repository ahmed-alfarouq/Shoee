export interface ZoomImageProps {
  /**
   * REQUIRED: The image source URL.
   */
  src: string;

  /**
   * REQUIRED: Accessible text describing the image.
   */
  alt: string;

  /**
   * OPTIONAL: additional CSS class for the container.
   */
  className?: string;

  /**
   * OPTIONAL: Callback fired when the image finishes loading successfully.
   */
  onLoad?: () => void;

  /**
   * OPTIONAL: Callback fired if the image fails to load.
   */
  onError?: () => void;

  /**
   * OPTIONAL: Zoom scale factor when hovering.
   * @default 1.5 (150% zoom).
   */
  zoomScale?: number;

  /**
   * OPTIONAL: Zoom lens size
   * @default 20 (20px).
   */
  baseLens?: number;

  /**
   * OPTIONAL: Duration of the zoom transition
   * @default 0.15
   */
  ease?: number;
}
