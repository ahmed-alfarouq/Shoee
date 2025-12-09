import type { ChangeEvent } from "react";

import styles from "./UploadFilesButton.module.scss";

import { Spinner } from "@/shared/Spinner";
import { Button } from "@components/Button";

import type { UploadFilesButtonProps } from "./UploadFilesButton.types";

const UploadFilesButton = ({
  label,
  isUploading,
  disabled = false,
  accept = "*",
  multiple = false,
  className,
  onUpload,
}: UploadFilesButtonProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    onUpload(e.target.files);
  };

  return (
    <Button size="sm" disabled={disabled} asChild className={className}>
      <label>
        <input
          type="file"
          accept={accept}
          disabled={disabled}
          multiple={multiple}
          onChange={handleChange}
          className={styles.form_input}
        />
        {label}
        {isUploading && <Spinner size="xs" />}
      </label>
    </Button>
  );
};

export default UploadFilesButton;
