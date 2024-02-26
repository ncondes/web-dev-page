/**
 * Renders a custom list component.
 *
 * This component generates an unordered list (<ul>) with each item wrapped in a <li> tag.
 * It is designed to display a list of items with a custom styling, including a rounded shape and a preceding circle icon for each item.
 *
 * @param {Object} props - The properties object.
 * @param {string[]} props.items - An array of strings where each string represents an item in the list.
 *
 * @returns {string} HTML string representing the custom list component, with each item displayed according to the specified styling.
 */
export const List = ({ items }) => {
  return `
    <ul class="custom-list">
      ${items
        .map(
          (item) => `
          <li class="custom-list__item rounded-sm">
            <i class="fa-regular fa-circle fa-2xs"></i>
            ${item}
          </li>`
        )
        .join("")}
    </ul>
  `;
};
