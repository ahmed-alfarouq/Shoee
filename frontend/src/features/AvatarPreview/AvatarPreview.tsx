import { Image } from "@features/Image";

import styles from "./AvatarPreview.module.scss";

import Avatar from "@/assets/images/avatar.png";

import type AvatarPreviewProps from "./AvatarPreview.types";

const AvatarPreview = ({ preview }: AvatarPreviewProps) => {
  return preview ? (
    <Image
      src={preview}
      placeholder={Avatar}
      alt="Avatar Preview"
      className={styles.avatar_preview}
    />
  ) : (
    <Image
      src={Avatar}
      placeholder={Avatar}
      alt="Avatar Preview"
      className={styles.avatar_preview}
    />
  );
};

export default AvatarPreview;
