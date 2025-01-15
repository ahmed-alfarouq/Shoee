const truncate = (text, size) => {
  const words = text.split(" ");
  return words.length > size ? words.slice(0, size).join(" ") + "..." : text;
};

export default truncate;
