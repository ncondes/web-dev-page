import { Picture } from "../picture/Picture.js";

export const BlogEntry = ({ title, label, date, content, imgSrc }) => {
  const labelClassMap = {
    New: "label-chip--new",
    Popular: "label-chip--popular",
    Featured: "label-chip--featured",
    "Must Read": "label-chip--must-read",
    "Editor's Choice": "label-chip--editors-choice",
  };

  return `
      <article class="blog-entry">
        <figure class="blog-entry__figure">
          ${Picture({
            className: "blog-entry__image",
            desktopImgSrc: imgSrc,
            imgAlt: title,
          })}
        </figure>
        <div class="blog-entry__content">
          <h2>${title}</h2>
          <div>
            <div class="blog-entry__label-chip ${
              labelClassMap[label]
            }">${label}</div>
            <p class="blog-entry__date">${date}</p>
          </div>
          <p class="blog-entry__text">${content}</p>
        </div>
      </article>
    `;
};
