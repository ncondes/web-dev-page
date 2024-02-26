import { Picture } from "../picture/Picture.js";

/**
 * Generates a blog entry component.
 *
 * @param {Object} props - The properties object for the blog entry.
 * @param {string} props.title - The title of the blog entry.
 * @param {string} props.label - The label for the blog entry (e.g., New, Popular).
 * @param {string} props.date - The publication date of the blog entry.
 * @param {string} props.content - The main content or summary of the blog entry.
 * @param {string} props.imgSrc - The source URL of the blog entry's image.
 * @returns {string} HTML string representing a blog entry.
 */
export const BlogEntry = ({ title, label, date, content, imgSrc }) => {
  // Maps label text to corresponding CSS class for styling
  const labelClassMap = {
    New: "label-chip--new",
    Popular: "label-chip--popular",
    Featured: "label-chip--featured",
    "Must Read": "label-chip--must-read",
    "Editor's Choice": "label-chip--editors-choice",
  };

  // Constructs and returns the HTML structure of the blog entry
  return `
    <article class="blog-entry">
      <figure class="blog-entry__figure">
        ${Picture({
          className: "blog-entry__image",
          desktopImgSrc: imgSrc,
          imgAlt: title, // Sets the alt text of the image to the blog title
        })}
      </figure>
      <div class="blog-entry__content">
        <h2>${title}</h2> <!-- Blog entry title -->
        <div>
          <div class="blog-entry__label-chip rounded ${
            labelClassMap[label] // Applies specific class based on the label
          }">${label}</div>
          <p class="blog-entry__date">${date}</p> <!-- Publication date -->
        </div>
        <p class="blog-entry__text">${content}</p> <!-- Blog content/summary -->
      </div>
    </article>
  `;
};
