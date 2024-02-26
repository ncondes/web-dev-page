import { BlogEntry } from "../blogEntry/BlogEntry.js";

/**
 * Renders a grid layout for displaying blog entries.
 *
 * @param {Object} props - The properties object for the blog grid.
 * @param {Array} props.blogEntries - An array of blog entry objects to be displayed in the grid.
 * Each blog entry object should include the properties expected by the `BlogEntry` component.
 * @returns {string} HTML string representing a grid of blog entries.
 */
export const BlogGrid = ({ blogEntries }) => {
  // Iterates over the blogEntries array, converting each blog entry object
  // into HTML using the BlogEntry component, and then concatenates them into a single HTML string.
  return `
    <div class="blog-grid">
      ${blogEntries.map((entry) => BlogEntry(entry)).join("")}
    </div>
  `;
};
