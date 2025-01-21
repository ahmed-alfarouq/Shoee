import React, { useState } from "react";

const BlurImage = ({ src, alt, placeholder, className }) => {
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
      {/* Placeholder image with blur */}
      {!isLoaded && !hasError && (
        <img src={placeholder} alt="placeholder" className="placeholder" />
      )}
      {/* Main image */}
      {!hasError && (
        <img
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
