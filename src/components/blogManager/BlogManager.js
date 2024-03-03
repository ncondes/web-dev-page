import { BlogGrid } from "../blogGrid/BlogGrid.js";

/**
 * Manages the display of blog entries with options to filter, sort, and search through them.
 *
 * @param {Object} props - The properties object for the Blog Manager.
 * @param {Array} props.data - An array of blog entry objects to be managed.
 * @returns {string} HTML string representing the blog management UI and the filtered, sorted, and searched blog entries.
 */
export const BlogManager = ({ data }) => {
  // Copies the initial dataset to manage display without mutating the original data
  let blogEntries = [...data];
  // Initialize filter, sort, and search states
  let currentFilter = "All";
  let currentSort = "Newest";
  let currentSearchTerm = "";

  // Updates the display based on current filter, sort, and search criteria.
  const updateDisplay = () => {
    // Filter entries based on the currentFilter value
    let processedEntries = blogEntries.filter(
      (entry) => currentFilter === "All" || entry.label === currentFilter
    );

    // Further filter the entries based on the currentSearchTerm within the title or content
    if (currentSearchTerm) {
      processedEntries = processedEntries.filter(
        (entry) =>
          entry.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
          entry.content.toLowerCase().includes(currentSearchTerm.toLowerCase())
      );
    }

    // Sort the filtered and searched entries based on the currentSort criteria
    processedEntries.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return currentSort === "Newest" ? dateB - dateA : dateA - dateB;
    });

    // Renders the processed entries to the page
    document.getElementById("blog-grid-container").innerHTML = BlogGrid({
      blogEntries: processedEntries,
    });
  };

  // Handlers for filter, sort, and search functionalities
  window.handleSelectFilter = (event) => {
    currentFilter = event.target.value;
    updateDisplay();
  };

  window.handleSortBy = (event) => {
    currentSort = event.target.value;
    updateDisplay();
  };

  window.handleSearchInput = (event) => {
    currentSearchTerm = event.target.value;
    updateDisplay();
  };

  // Resets all filters and search input to their default states and updates the display.
  window.resetFilters = () => {
    currentFilter = "All";
    currentSort = "Newest";
    currentSearchTerm = "";
    document.getElementById("select-blog-category").value = currentFilter;
    document.getElementById("select-sort-by").value = currentSort;
    document.getElementById("search-blog-input").value = "";

    updateDisplay();
  };

  // Renders the blog management UI with filter, sort, search options, and the blog grid container
  return `
    <div class="filters-container">
      <input class="rounded-sm" type="text" id="search-blog-input" placeholder="Search..." oninput="handleSearchInput(event)">
      <select class="blog-select rounded-sm" id="select-blog-category" onchange="handleSelectFilter(event)">
        <option value="All">All</option>
        <option value="New">New</option>
        <option value="Popular">Popular</option>
        <option value="Featured">Featured</option>
        <option value="Must Read">Must Read</option>
        <option value="Editor's Choice">Editor's Choice</option>
      </select>
      <select class="blog-select rounded-sm" id="select-sort-by" onchange="handleSortBy(event)">
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
      <button
        class="blog-reset-button rounded-sm" 
        type="button"
        onclick="resetFilters()"
      >
        <i class="fas fa-undo"></i>
      </button>
    </div>
    <div id="blog-grid-container">
      ${BlogGrid({ blogEntries })}
    </div>
  `;
};
