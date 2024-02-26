/**
 * Renders a hero section component with a title, body text, and an image.
 *
 * This component is typically used at the top of a webpage to introduce the main theme or focus of the page. It combines visual and textual elements to create a compelling introduction.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title text displayed prominently in the hero section.
 * @param {string} props.body - The body text providing more detail or introduction related to the hero section.
 * @param {string} props.imgSrc - The source URL of the image to be displayed in the hero section.
 * @param {string} props.imgAlt - The alternative text for the image, enhancing accessibility by describing the image content.
 *
 * @returns {string} HTML string representing the hero section component.
 */
export const Hero = ({ title, body, imgSrc, imgAlt }) => `
  <section class="hero">
    <figure class="hero__image">
      <img src="${imgSrc}" alt="${imgAlt}" />
    </figure>
    <div class="hero__content section-container">
      <header>
        <h1 class="hero__title">${title}</h1>
      </header>
      <p class="hero__body">${body}</p>
    </div>
  </section>
`;
