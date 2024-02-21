export const Hero = ({ title, body, imgSrc, imgAlt = "Hero Image" }) => `
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
