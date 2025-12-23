import { useEffect, useRef, useState } from "react";

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

  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleLoad = () => setIsLoaded(true);

  const handleError = () => setHasError(true);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = src;

            observer.unobserve(img);
          }
        });
      },
      { rootMargin: "200px" }
    );

    observer.observe(img);

    return () => observer.disconnect();
  }, [src]);

  return (
    <div className={`${styles.blur_image_wrapper} ${className}`}>
      {!isLoaded && !hasError && (
        <img
          alt=""
          src={placeholder}
          aria-hidden="true"
          className={styles.placeholder}
        />
      )}

      {!hasError && !zoomImage && (
        <img
          alt={alt}
          ref={imageRef}
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
