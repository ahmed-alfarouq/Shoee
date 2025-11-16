export interface ThumbnailProps {
  /**
   * OPTIONAL: navigation target.
   * If provided, the Thumbnail will be wrapped with a React Router <Link>.
   */
  to?: string;

  /**
   * REQUIRED: The main image source displayed inside the thumbnail.
   * Must be a valid URL or image path.
   */
  src: string;

  /**
   * Accessible text describing the image.
   * Required for screen readers and SEO.
   */
  alt: string;

  /**
   * OPTIOANL: Shown while image loads/fails to load.
   * Example: "https://placehold.co/300x300"
   */
  placeholder?: string;

  /**
   * OPTIONAL: Fired when the "Quick View" button is clicked.
   */
  onQuickView: () => void;

  /**
   * OPTIONAL: Extra UI elements rendered inside the Thumbnail.
   * Example: <span className="badge">Sale</span>
   */
  children?: React.ReactNode;
}
