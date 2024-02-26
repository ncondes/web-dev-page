/**
 * Creates a paragraph element with the specified body text.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.body - The text to be displayed inside the paragraph.
 *
 * @returns {string} HTML string representing a paragraph with the given text.
 */
export const Paragraph = ({ body }) => `<p class="paragraph">${body}</p>`;
