export function sanitizeName(text) {
  return `${text[0].toUpperCase()}${text.slice(1).replace(/-/g, " ")}`;
}
