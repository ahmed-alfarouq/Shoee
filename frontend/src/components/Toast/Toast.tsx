import { useEffect, useRef, useState } from "react";

import styles from "./Toast.module.scss";

import { type ToastProps } from "./Toast.types";

export const Toast = ({
  message,
  variant = "success",
  duration = 3000,
  closable = true,
  onClose,
}: ToastProps) => {
  const [progress, setProgress] = useState(100);
  const [visible, setVisible] = useState(true);

  const timerRef = useRef<number | null>(null);
  const cleanupRef = useRef<number | null>(null);

  useEffect(() => {
    if (!closable) return;

    const interval = 50;
    const step = (interval / duration) * 100;

    timerRef.current = window.setInterval(() => {
      setProgress((p) => {
        const next = p - step;
        if (next <= 0) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          setProgress(0);
          setVisible(false);

          cleanupRef.current = window.setTimeout(() => {
            onClose?.();
          }, 300);
          return 0;
        }
        return next;
      });
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      if (cleanupRef.current) {
        clearTimeout(cleanupRef.current);
        cleanupRef.current = null;
      }
    };
  }, [closable, duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`${styles.toast} ${styles[variant]} ${
        !visible ? styles.hidden : ""
      }`}
    >
      <p>{message}</p>

      {closable && (
        <div className={styles.progress_container} aria-hidden="true">
          <div
            className={styles.progress_bar}
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default Toast;
