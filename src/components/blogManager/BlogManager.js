import { BlogGrid } from "../blogGrid/BlogGrid.js";

export const BlogManager = ({ data }) => {
  let blogEntries = [...data];
  let currentFilter = "All";
  let currentSort = "Newest";
  let currentSearchTerm = "";

  const updateDisplay = () => {
    // Apply filter first
    let processedEntries = blogEntries.filter(
      (entry) => currentFilter === "All" || entry.label === currentFilter
    );

    // Apply search within the filtered results
    if (currentSearchTerm) {
      processedEntries = processedEntries.filter(
        (entry) =>
          entry.title.toLowerCase().includes(currentSearchTerm.toLowerCase()) ||
          entry.content.toLowerCase().includes(currentSearchTerm.toLowerCase())
      );
    }

    // Apply sort within the filtered and searched results
    processedEntries.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return currentSort === "Newest" ? dateB - dateA : dateA - dateB;
    });

    // Update BlogGrid display
    document.getElementById("blog-grid-container").innerHTML = BlogGrid({
      blogEntries: processedEntries,
    });
  };

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

  window.resetFilters = () => {
    currentFilter = "All";
    currentSort = "Newest";
    currentSearchTerm = "";
    document.getElementById("select-blog-category").value = currentFilter;
    document.getElementById("select-sort-by").value = currentSort;
    document.getElementById("search-blog-input").value = "";

    updateDisplay();
  };

  return `
    <div class="filters-container">
      <input type="text" id="search-blog-input" placeholder="Search..." oninput="handleSearchInput(event)">
      <select class="blog-select" id="select-blog-category" onchange="handleSelectFilter(event)">
        <option value="All">All</option>
        <option value="New">New</option>
        <option value="Popular">Popular</option>
        <option value="Featured">Featured</option>
        <option value="Must Read">Must Read</option>
        <option value="Editor's Choice">Editor's Choice</option>
      </select>
      <select class="blog-select" id="select-sort-by" onchange="handleSortBy(event)">
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
      <button
        class="blog-reset-button" 
        type="button"
        onclick="resetFilters()"
      >
        <i class="fa-solid fa-arrows-rotate"></i>
      </button>
    </div>
    <div id="blog-grid-container">
      ${BlogGrid({ blogEntries })}
    </div>
  `;
};
