const BGOverlay = ({ reset, hidden }) => {
  return (
    <button
      type="button"
      className={`bg-overlay ${hidden ? "hidden" : ""}`}
      onClick={reset}
      title="Background Overlay"
      aria-hidden={hidden}
    ></button>
  );
};

export default BGOverlay;
