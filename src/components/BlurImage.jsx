import React, { useState } from "react";
import ZoomImage from "./ZoomImage";

const BlurImage = ({ src, alt, placeholder, className, zoomImage = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);


  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.error("Image failed to load:", src);
  };

  return (
    <div className={`blur-image-wrapper ${className}`}>
      {!isLoaded && !hasError && (
        <img src={placeholder} alt="placeholder" className="placeholder" />
      )}

      {!hasError && !zoomImage && (
        <img
          src={src}
          alt={alt}
          className={`main-image ${isLoaded ? "visible" : "hidden"}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {!hasError && zoomImage && (
        <ZoomImage
          src={src}
          alt={alt}
          className={`main-image ${isLoaded ? "visible" : "hidden"}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  );
};

export default BlurImage;
