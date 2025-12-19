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
   * @default 2 (200% zoom).
   */
  zoomScale?: number;

  /**
   * OPTIONAL: Duration of the zoom transition in milliseconds.
   * @default 300 (300ms)
   */
  transitionDuration?: number;
}
