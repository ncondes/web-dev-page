/**
 * Generates a responsive picture element with sources for desktop, tablet, and mobile.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.className - CSS class name(s) to be applied to the picture element.
 * @param {string} props.desktopImgSrc - Image source URL for desktop screens.
 * @param {string} [props.mobileImgSrc=desktopImgSrc] - Image source URL for mobile screens, defaults to desktop image if not provided.
 * @param {string} [props.tabletImgSrc=desktopImgSrc] - Image source URL for tablet screens, defaults to desktop image if not provided.
 * @param {string} props.imgAlt - Alternative text for the image.
 *
 * @returns {string} HTML string representing a responsive picture element with specified image sources and alt text.
 */
export const Picture = ({
  className,
  desktopImgSrc,
  mobileImgSrc = desktopImgSrc,
  tabletImgSrc = desktopImgSrc,
  imgAlt,
}) => `
  <picture class="${className}">
    <source srcset="${desktopImgSrc}" media="(min-width: 1024px)" />
    <source srcset="${tabletImgSrc}" media="(min-width: 768px)" />
    <img src="${mobileImgSrc}" alt="${imgAlt}" />
  </picture>
`;
