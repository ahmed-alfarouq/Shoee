const BGOverlay = ({ reset, hidden }) => {
  return (
    <div
      role="button"
      className={`bg-overlay ${hidden ? "hidden" : ""}`}
      onClick={reset}
      title="Background Overlay"
      aria-hidden={hidden}
    ></div>
  );
};

export default BGOverlay;
