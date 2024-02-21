export const Accordion = ({ items }) => {
  return `
    <div class="accordion">
      ${items
        .map(
          (item, index) => `
        <div class="accordion__item shadow">
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

export const handleToggleAccordion = () => {
  const toggleAccordion = (event, id) => {
    const accordionButton = event.target.closest(".accordion__button");
    const accordionBody = document.getElementById(id);
    const isExpanded = accordionButton.getAttribute("aria-expanded") === "true";

    if (!isExpanded) {
      // Expanding accordion
      accordionButton.setAttribute("aria-expanded", true);
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
      // Collapsing accordion
      // Start by setting maxHeight to current scrollHeight plus a bit extra
      accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
      // Force repaint to ensure maxHeight is applied
      window.getComputedStyle(accordionBody).maxHeight;
      // Set maxHeight to 0 to trigger collapse animation
      accordionBody.style.maxHeight = "0";
      // Remove the maxHeight property after the animation ends
      setTimeout(() => {
        accordionButton.setAttribute("aria-expanded", false);
      }, 200);
    }
  };

  window.toggleAccordion = toggleAccordion;
};
