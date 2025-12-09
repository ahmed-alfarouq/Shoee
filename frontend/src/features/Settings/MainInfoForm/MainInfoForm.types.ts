export interface MainInfoFormProps {
  /**
   * REQUIRED: A callback fired when user clicks submit
   */
  isSubmitting: boolean;

  /**
   * REQUIRED: A callback fired when user changes avatar
   */
  onAvatarChange: (file: File) => void;
}
