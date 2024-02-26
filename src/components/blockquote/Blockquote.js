/**
 * Blockquote Component
 * Generates a blockquote element to display a quoted text.
 *
 * This component is useful for highlighting significant text segments, such as quotes or important statements,
 * in a way that visually distinguishes them from other text content.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.text - The text to be displayed inside the blockquote.
 * @returns {string} HTML string representing a blockquote with the provided text.
 */
export const Blockquote = ({ text }) => {
  return `<blockquote class="blockquote">${text}</blockquote>`;
};
