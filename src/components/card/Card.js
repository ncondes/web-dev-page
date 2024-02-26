import { Picture } from "../picture/Picture.js";

/**
 * Renders a card component with an image and textual content.
 *
 * This component is designed to display a card with a picture and accompanying text, such as a title and HTML content. It utilizes the `Picture` component to handle the image rendering.
 *
 * @param {Object} props - The properties object for the Card component.
 * @param {string} props.imgSrc - The source URL of the image to be displayed in the card.
 * @param {string} props.imgAlt - The alt text for the image, used for accessibility.
 * @param {string} props.title - The title text to be displayed at the top of the card's content.
 * @param {string} props.html - The HTML content to be displayed within the card. This can include formatted text or additional HTML elements.
 * @returns {string} HTML string representing the card component.
 */
export const Card = ({ imgSrc, imgAlt, title, html }) => {
  // Generates the picture HTML using the Picture component with provided image properties
  const picture = Picture({
    className: "card__image",
    desktopImgSrc: imgSrc,
    imgAlt: imgAlt,
  });

  // Returns the complete card HTML structure, incorporating the picture and the textual content
  return `
    <article class="card shadow rounded">
      ${picture}
        <div class="card__content">
          <h2 class="card__title">${title}</h2>
          <p class="">${html}</p>
        </div>
    </article>
  `;
};
