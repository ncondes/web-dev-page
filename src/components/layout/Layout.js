import { Footer } from "../footer/Footer.js";
import { Navbar } from "../navbar/Navbar.js";

/**
 * Renders a layout component that wraps the page content with a Navbar and a Footer.
 *
 * This component serves as a structural template for pages, ensuring consistency in the appearance of the navigation bar and footer across the site. It dynamically inserts the main content of the page between these two elements.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.children - The HTML content to be rendered within the main section of the layout. This could include any number of components or HTML elements that constitute the body of a page.
 *
 * @returns {string} HTML string representing the structured layout of a webpage, including a navbar at the top, dynamic main content, and a footer at the bottom.
 */
export const Layout = ({ children }) => `
  ${Navbar()}
  <main>
    ${children}
  </main>
  ${Footer()}
`;
