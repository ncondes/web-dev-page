import { BlogEntry } from "../blogEntry/BlogEntry.js";

export const BlogGrid = ({ blogEntries }) => {
  return `
    <div class="blog-grid">
      ${blogEntries.map((entry) => BlogEntry(entry)).join("")}
    </div>
  `;
};
