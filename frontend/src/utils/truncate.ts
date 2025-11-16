const truncate = (text: string, size: number) => {
  const words = text.split(" ");
  return words.length > size ? words.slice(0, size).join(" ") + "..." : text;
};

export default truncate;
