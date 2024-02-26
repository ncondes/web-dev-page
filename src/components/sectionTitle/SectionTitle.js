/**
 * Creates an HTML string for a section title.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The text to be displayed as the section title.
 *
 * @returns {string} An HTML string representing a section title.
 */
export const SectionTitle = ({ title }) =>
  `<h2 class="section-title">${title}</h2>`;
