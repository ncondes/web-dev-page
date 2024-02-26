/**
 * Generates an HTML string for the sidebar component.
 * The sidebar contains navigation links to various sections of the website and a donate button.
 *
 * @returns {string} An HTML string representing the sidebar component.
 */
export const Sidebar = () => `
  <div class="sidebar">
    <ul class="sidebar__list">
      <li class="sidebar__home">
        <a href="/" aria-label="Home">
          <i class="fa-solid fa-hands-holding-child"></i>
          <h2>Fundacion Niños de Los Andes</h2>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="/" role="menuitem" aria-label="What we do">
          <i class="fa-solid fa-child-reaching"></i>
          <span>What We Do</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="/about-us.html" role="menuitem" aria-label="About us">
          <i class="fa-solid fa-question"></i>
          <span>About Us</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="/how-to-help.html" role="menuitem" aria-label="How to help">
          <i class="fa-solid fa-handshake-angle"></i>
          <span>How to Help</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="/blog.html" role="menuitem" aria-label="Blog">
          <i class="fa-solid fa-note-sticky"></i>
          <span>Blog</span>
        </a>
      </li>
      <li class="sidebar__item">
        <a href="/contact-us.html" role="menuitem" aria-label="Contact us">
          <i class="fa-solid fa-envelope"></i>
          <span>Contact Us</span>
        </a>
      </li>
      <a href="https://donar.ninandes.org/" target="_blank" aria-label="Donate now">
        <button class="sidebar__donate-button rounded">
          Donate
          <i class="fa-solid fa-hand-holding-medical"></i>
        </button>
      </a>
    </ul>
  </div>
`;
