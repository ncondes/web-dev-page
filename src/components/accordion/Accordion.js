/**
 * Accordion Component
 * Generates an accordion component with expandable and collapsible items.
 * Each item can be expanded to show more content or collapsed to hide it.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.items - Array of items to display in the accordion. Each item is an object with 'label' and 'html' properties.
 * @returns {string} HTML string representing the accordion component.
 *
 * Example of an item object:
 * {
 *   label: 'Section 1', // Title of the accordion section
 *   html: '<p>Content for Section 1</p>' // HTML content to show when the section is expanded
 * }
 */
export const Accordion = ({ items }) => {
  /**
   * Toggles the accordion item between expanded and collapsed state.
   *
   * @param {Event} event - The click event on the accordion button.
   * @param {string} id - The ID of the accordion body to toggle.
   */
  window.toggleAccordion = (event, id) => {
    const accordionButton = event.target.closest(".accordion__button");
    const accordionBody = document.getElementById(id);
    const isExpanded = accordionButton.getAttribute("aria-expanded") === "true";

    if (!isExpanded) {
      // Expanding the accordion section
      accordionButton.setAttribute("aria-expanded", true);
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      // Collapsing the accordion section
      // Ensure the maxHeight is set to the current scrollHeight before collapsing
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      // Trigger reflow to apply maxHeight, then collapse
      window.getComputedStyle(accordionBody).maxHeight;
      accordionBody.style.maxHeight = "0";
      // Reset aria-expanded attribute after animation completes
      setTimeout(() => {
        accordionButton.setAttribute("aria-expanded", false);
      }, 200);
    }
  };

  // Generating HTML for each accordion item
  return `
    <div class="accordion">
      ${items
        .map(
          (item, index) => `
          <div class="accordion__item shadow rounded">
            <button class="accordion__button" id="accordion__header-${index}" aria-expanded="false" onclick="toggleAccordion(event, 'accordion__body-${index}')">
              ${item.label}
              <i class="fa-solid fa-caret-down"></i>
            </button>
            <div class="accordion__body" id="accordion__body-${index}" aria-labelledby="accordion__header-${index}" hidden>
              ${item.html}
            </div>
          </div>  
        `
        )
        .join("")}
    </div>
  `;
};
