import React, { forwardRef } from "react";

const BGOverlay = forwardRef(({ reset }, ref) => {
  return (
    <button
      type="button"
      className="bg-overlay hidden"
      ref={ref}
      onClick={reset}
      title="Background Overlay"
    ></button>
  );
});

export default BGOverlay;
