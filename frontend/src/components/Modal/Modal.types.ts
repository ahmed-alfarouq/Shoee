export interface ModalProps {
  /**
   * REQUIRED: Controls whether the modal is open or closed.
   */
  isOpen: boolean;

  /**
   * REQUIRED: Callback fired when the modal should close.
   */
  onClose: () => void;

  /**
   * REQUIRED: The content to render inside the modal.
   * Can be any React nodes: text, components, forms, etc.
   */
  children: React.ReactNode;

  /**
   * OPTIONAL: The title of the modal, used for accessibility and display.
   */
  title?: string;

  /**
   * OPTIONAL: Additional CSS class names to apply to the modal content wrapper.
   */
  className?: string;

  /**
   * OPTIONAL: Whether clicking the overlay (background) should close the modal.
   * @default true
   */
  closeOnOverlayClick?: boolean;
}
