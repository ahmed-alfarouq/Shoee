export interface UploadFilesButtonProps {
  /**
   * REQUIRED: Text shown inside the button
   */
  label: string;

  /**
   * OPTIONAL: Disable the input
   * @default false
   */
  disabled?: boolean;

  /**
   * OPTIONAL: Displayes spinner if true
   * @default false
   */
  isUploading?: boolean;

  /**
   * OPTIONAL: File types allowed (e.g. "image/*", "application/pdf")
   * @default  "*"
   */
  accept?: string;

  /**
   * OPTIONAL: Allow multiple files
   * @default false
   */
  multiple?: boolean;

  /**
   * OPTIONAL: Custom className
   */
  className?: string;

  /**
   * REQUIRED: Called when user selects one or more files
   * @params files: FileList[]
   */
  onUpload: (files: FileList) => void;
}
