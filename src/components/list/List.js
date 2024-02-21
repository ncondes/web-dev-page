export const List = ({ items }) => {
  return `
    <ul class="custom-list">
      ${items
        .map(
          (item) => `
          <li class="custom-list__item">
            <i class="fa-regular fa-circle fa-2xs"></i>
            ${item}
          </li>`
        )
        .join("")}
    </ul>
  `;
};
