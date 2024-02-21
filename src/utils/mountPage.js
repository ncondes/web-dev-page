import { navbarMobileMenuAnimation } from "../components/navbar/Navbar.js";

/**
 * Initializes and mounts a page component to the DOM, and executes an array of additional functions.
 * This function is designed to be called for each page to handle common setup tasks such as rendering
 * the main component and running any page-specific JavaScript functions.
 *
 * @param {Function} pageComponent - A function that returns an HTML string representing the page content.
 * This component is rendered inside the element with the id "root".
 * @param {Function[]} functions - An optional array of functions to be executed after the page component
 * is mounted. These functions can be used for additional page setup such as event listeners or dynamic content.
 */
export const mountPage = (pageComponent, functions = []) => {
  document.addEventListener("DOMContentLoaded", () => {
    // Render the page component in the root element
    const root = document.getElementById("root");
    root.innerHTML = pageComponent(); // Fixed: Call the function and assign its return value

    // Run the mobile menu animation for the navbar (default behavior for all pages)
    navbarMobileMenuAnimation();

    // Register and run the related functions for the page
    functions.forEach((func) => {
      // It's important that these functions are designed to be called without arguments,
      // or alternatively, modify this to pass specific arguments if needed.
      func();
    });
  });
};
