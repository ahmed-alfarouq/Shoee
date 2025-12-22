import { useState } from "react";

import styles from "./Image.module.scss";

import { ZoomImage } from "@features/ZoomImage";

import type { ImageProps } from "./Image.types";

const Image = ({
  src,
  alt,
  placeholder,
  className,
  zoomImage = false,
}: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => setIsLoaded(true);

  const handleError = () => setHasError(true);

  return (
    <div className={`${styles.blur_image_wrapper} ${className}`}>
      {!isLoaded && !hasError && (
        <img src={placeholder} alt="" className={styles.placeholder} />
      )}

      {!hasError && !zoomImage && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${styles.main_image} ${isLoaded ? "visible" : "hidden"}`}
        />
      )}
      {!hasError && zoomImage && (
        <ZoomImage
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`${styles.main_image} ${isLoaded ? "visible" : "hidden"}`}
        />
      )}
    </div>
  );
};

export default Image;
