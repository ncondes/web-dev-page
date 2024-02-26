import { Sidebar } from "./Sidebar.js";

/**
 * Generates an HTML string for the navigation bar component.
 * The navbar includes links to various sections of the website, a donate button,
 * and incorporates a mobile menu button to toggle the visibility of the sidebar.
 *
 * @returns {string} An HTML string representing the navigation bar component.
 */
export const Navbar = () => `
  <nav class="navbar" aria-label="Main navigation">
    <div class="navbar__home-icon">
      <a href="/" aria-label="Home">
        <img src="./assets/img/ninos-de-los-andes-icon.png" alt="Fundación Niños de Los Andes icon" />
      </a>
    </div>
    <div class="navbar__mobile-menu-button--wrapper">
      <button class="navbar__mobile-menu-button navbar__mobile-menu-button--not-active">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
    <div class="navbar__menu" role="menu">
      <a href="/" role="menuitem" aria-label="What we do">
        <i class="fa-solid fa-house"></i>
        What We Do
      </a>
      <a href="/about-us.html" role="menuitem" aria-label="About us">
        <i class="fa-solid fa-question"></i>
        About Us
      </a>
      <a href="/how-to-help.html" role="menuitem" aria-label="How to help">
        <i class="fa-solid fa-handshake-angle"></i>
        How to Help
      </a>
      <a href="/blog.html" role="menuitem" aria-label="Blog">
        <i class="fa-solid fa-note-sticky"></i>
        Blog
      </a>
      <a href="/contact-us.html" role="menuitem" aria-label="Contact us">
        <i class="fa-solid fa-envelope"></i>
        Contact Us
      </a>
    </div>
    <a href="https://donar.ninandes.org/" target="_blank" aria-label="Donate now" class="navbar__donate-button rounded">
      <button>
        Donate
        <i class="fa-solid fa-hand-holding-medical"></i>
      </button>
    </a>
  </nav>
  <div class="overlay"></div>
  ${Sidebar()}
`;

/**
 * Adds animation and interactivity to the mobile menu button in the navigation bar.
 * Toggles the sidebar visibility on mobile devices and manages the overlay and page scroll.
 */
export const navbarMobileMenuAnimation = () => {
  const mobileButton = document.querySelector(".navbar__mobile-menu-button");
  const mobileMenu = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  // Highlight the current page link in the sidebar
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".sidebar__item a");
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("sidebar__item--active");
    }
  });

  // Toggle mobile menu and overlay visibility
  mobileButton.addEventListener("click", () => {
    mobileButton.classList.toggle("navbar__mobile-menu-button--active");
    mobileButton.classList.toggle("navbar__mobile-menu-button--not-active");

    if (mobileButton.classList.contains("navbar__mobile-menu-button--active")) {
      mobileMenu.style.transform = "translateX(0)";
      mobileButton.style.zIndex = "100";
      overlay.style.display = "block";
      mobileMenu.style.zIndex = "1";
      document.body.style.overflow = "hidden";
    } else {
      mobileMenu.style.transform = "translateX(-100%)";
      mobileButton.style.zIndex = "0";
      overlay.style.animation = "fadeOutAnimation .5s";
      setTimeout(() => {
        overlay.style.display = "none";
        overlay.style.animation = "fadeInAnimation .5s";
      }, 500);
      document.body.style.overflow = "auto";
    }
  });
};
