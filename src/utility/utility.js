/**
 * @param {number} size
 * @returns {string[]}
 */
export function generateRandomRGBColor() {
  const red = Math.random() * 250;
  const green = Math.random() * 250;
  const blue = Math.random() * 250;
  return `rgb(${red},${green},${blue})`;
}

/**
 * @param {number} size
 * @returns {string[]}
 */
export function generateBoxes(size) {
  const boxes = new Array(size);
  for (let i = 0; i < size; ++i) {
    boxes[i] = generateRandomRGBColor();
  }
  return boxes;
}
