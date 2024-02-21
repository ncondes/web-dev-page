import { Picture } from "../picture/Picture.js";

export const Card = ({ imgSrc, imgAlt, title, html }) => {
  const picture = Picture({
    className: "card__image",
    desktopImgSrc: imgSrc,
    imgAlt: imgAlt,
  });

  return `
    <article class="card shadow">
      ${picture}
        <div class="card__content">
          <h2 class="card__title">${title}</h2>
          <p class="">${html}</p>
        </div>
    </article>
    `;
};
