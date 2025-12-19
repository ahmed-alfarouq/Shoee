/**
 * Formats text like "mens-shirts" → "Mens Shirts"
 * @param {string} text
 * @returns {string}
 */
const formatText = (text: string) => {
  if (!text) return "";

  return text
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default formatText;
