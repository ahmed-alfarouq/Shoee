import { useRef, useCallback, type MouseEventHandler, useEffect } from "react";

import styles from "./ZoomImage.module.scss";

import type { ZoomImageProps } from "./ZoomImage.types";

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const ZoomImage = ({
  src,
  alt,
  onLoad,
  onError,
  ease = 0.15,
  baseLens = 20,
  zoomScale = 2,
  className = "",
}: ZoomImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const zoomRef = useRef<HTMLImageElement>(null);
  const borderRef = useRef<HTMLImageElement>(null);

  const current = useRef({ x: -100, y: -100 });
  const target = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  const isTouchScreen = useCallback(() => {
    return window.matchMedia("(pointer: coarse)").matches;
  }, []);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!containerRef.current || isTouchScreen()) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    let x = ((e.clientX - left) / width) * 100;
    let y = ((e.clientY - top) / height) * 100;

    const lensRadius = baseLens * zoomScale;
    const lensXPercent = (lensRadius / width) * 100;
    const lensYPercent = (lensRadius / height) * 100;

    x = clamp(x, lensXPercent, 100 - lensXPercent);
    y = clamp(y, lensYPercent, 100 - lensYPercent);

    target.current = { x, y };
  };

  useEffect(() => {
    const animate = () => {
      if (!zoomRef.current || !borderRef.current || !containerRef.current) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      const c = current.current;
      const t = target.current;

      c.x += (t.x - c.x) * ease;
      c.y += (t.y - c.y) * ease;

      const rect = containerRef.current.getBoundingClientRect();
      const lensRadius = baseLens * Math.sqrt(zoomScale);
      const diameter = lensRadius * 2 * zoomScale;

      zoomRef.current.style.transformOrigin = `${c.x}% ${c.y}%`;
      zoomRef.current.style.clipPath = `circle(${lensRadius}px at ${c.x}% ${c.y}%)`;

      borderRef.current.style.width = `${diameter}px`;
      borderRef.current.style.height = `${diameter}px`;

      // Position in pixels
      const left = (c.x / 100) * rect.width;
      const top = (c.y / 100) * rect.height;

      borderRef.current.style.left = `${left}px`;
      borderRef.current.style.top = `${top}px`;

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [baseLens, ease, zoomScale]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`${styles.zoom_container} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        draggable={false}
        className={styles.primary_image}
      />
      <img
        src={src}
        alt={alt}
        ref={zoomRef}
        draggable={false}
        onError={onError}
        className={styles.zoom_image}
        style={{
          transform: `scale(${zoomScale})`,
        }}
      />
      <div ref={borderRef} className={styles.lens_border} />
    </div>
  );
};

export default ZoomImage;
