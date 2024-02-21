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
