import debounce from "lodash/debounce";
import { useState, useRef, useCallback, type MouseEventHandler } from "react";

import styles from "./ZoomImage.module.scss";

import type { ZoomImageProps } from "./ZoomImage.types";

const ZoomImage = ({
  src,
  alt,
  className = "",
  onLoad,
  onError,
  zoomScale = 2,
  transitionDuration = 300,
}: ZoomImageProps) => {
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const imageRef = useRef<HTMLImageElement>(null);

  const isTouchScreen = useCallback(() => {
    return window.matchMedia("(pointer: coarse)").matches;
  }, []);

  const updatePosition = debounce((x: number, y: number) => {
    setPosition({ x, y });
  }, 100);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!imageRef.current || isTouchScreen()) return;

    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    updatePosition(x, y);
  };

  const handleMouseEnter = () => {
    if (isTouchScreen()) return;
    setZoom(true);
  };

  const handleMouseLeave = () => setZoom(false);

  return (
    <div
      className={`${styles.zoom_container} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${styles.zoom_image} ${zoom ? styles.zoomed : ""}`}
        style={{
          transformOrigin: `${position.x}% ${position.y}%`,
          transform: zoom ? `scale(${zoomScale})` : undefined,
          transition: `transform ${transitionDuration}ms ease`,
          pointerEvents: "none",
        }}
        onLoad={onLoad}
        onError={onError}
      />
    </div>
  );
};

export default ZoomImage;
