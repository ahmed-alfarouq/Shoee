import { useEffect, useState } from "react";

const FloatingAlert = ({ message, seconds = 300, callback }) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!message) return;

    setVisible(true);
    setProgress(100);
    setFadeOut(false);

    const interval = setInterval(() => {
      setProgress((prev) => Math.max(prev - 100 / (seconds * 10), 0));
    }, 100);

    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 500);
      callback();
    }, seconds * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [message, seconds, callback]);

  if (!message || !visible) return null;

  return (
    <div className={`floating-alert ${fadeOut ? "slide-up" : ""}`}>
      <p>{message}</p>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default FloatingAlert;
