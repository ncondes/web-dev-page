import { Sidebar } from "./Sidebar.js";

export const Navbar = () => `
<nav class="navbar" aria-label="Main navigation">
  <div class="navbar__home-icon">
    <a href="/" aria-label="Home">
      <img src="./assets/img/ninos-de-los-andes-icon.png" alt="Fundación Niños de Los Andes icon" />
    </a>
  </div>

  <div class="navbar__mobile-menu-button--wrapper">
    <button
    class="navbar__mobile-menu-button navbar__mobile-menu-button--not-active"
    >
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

  <a href="https://donar.ninandes.org/" target="_blank" aria-label="Donate now" class="navbar__donate-button">
    <button>
      Donate
      <i class="fa-solid fa-hand-holding-medical"></i>
    </button>
  </a>
</nav>

<div class="overlay"></div>

${Sidebar()}
`;

export const navbarMobileMenuAnimation = () => {
  // Select the elements from the DOM
  const mobileButton = document.querySelector(".navbar__mobile-menu-button");
  const mobileMenu = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  // Add active class to the current page link in the sidebar menu
  const currentPath = window.location.pathname;
  const links = document.querySelectorAll(".sidebar__item a");
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.parentElement.classList.add("sidebar__item--active");
    }
  });

  mobileButton.addEventListener("click", () => {
    // Toggle the active and not-active classes
    mobileButton.classList.toggle("navbar__mobile-menu-button--active");
    mobileButton.classList.toggle("navbar__mobile-menu-button--not-active");

    if (mobileButton.classList.contains("navbar__mobile-menu-button--active")) {
      // Display the mobile menu with a slide in animation
      mobileMenu.style.transform = "translateX(0)";
      // Set the button's z-index to 100 to make it appear on top of the overlay
      mobileButton.style.zIndex = "100";
      // Display the overlay
      overlay.style.display = "block";
      // Set the overlay's z-index to 1 to make it appear on top of the overlay
      mobileMenu.style.zIndex = "1";
      // Block the scrolling of the body
      document.body.style.overflow = "hidden";
    } else {
      // Collapse the mobile menu
      mobileMenu.style.transform = "translateX(-100%)";
      // Reset the button's z-index to 0
      mobileButton.style.zIndex = "0";
      // Hide the overlay with a fade out animation
      overlay.style.animation = "fadeOutAnimation .5s";
      // Hide the overlay after the animation ends and reset the animation
      setTimeout(() => {
        overlay.style.display = "none";
        overlay.style.animation = "fadeInAnimation .5s";
      }, 500);
      // Allow the scrolling of the body
      document.body.style.overflow = "auto";
    }
  });
};
