import { memo } from "react";
import { Link } from "react-router-dom";

import styles from "./Thumbnail.module.scss";

import { Image } from "@/features/Image";
import { Button } from "@/components/Button";

import type { ThumbnailProps } from "./Thumbnail.types";

const Thumbnail = memo(
  ({
    to,
    src,
    alt,
    placeholder = "https://placehold.co/300x300",
    onQuickView,
    children,
  }: ThumbnailProps) => {
    return (
      <div className={styles.thumbnail}>
        {to ? (
          <Link to={to}>
            <Image src={src} alt={alt} placeholder={placeholder} />
          </Link>
        ) : (
          <Image src={src} alt={alt} placeholder={placeholder} />
        )}

        {children}

        {onQuickView && (
          <Button
            variant="secondary"
            size="lg"
            className={styles.quick_view}
            onClick={onQuickView}
            aria-label={`Quick view for ${alt}`}
          >
            quick view
          </Button>
        )}
      </div>
    );
  }
);

export default Thumbnail;
