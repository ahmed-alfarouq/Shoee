import React, { useState, useRef } from "react";

const ZoomImage = ({ src, alt, className, onLoad, onError }) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
  
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  return (
    <div
      className={`zoom-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`zoom-image ${zoom ? "zoomed" : ""}`}
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
        }}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};

export default ZoomImage;
