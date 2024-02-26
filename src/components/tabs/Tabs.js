/**
 * Generates an HTML string for a tabs component, including both the tab buttons and the tab content.
 * Allows for dynamic creation of tabs and their content based on provided data.
 *
 * @param {Object} props - The properties object.
 * @param {Array} props.tabs - An array of objects representing each tab and its content.
 * @param {Object} [props.options={}] - Optional settings for the tabs component.
 * @param {string} [props.options.className=""] - Additional CSS class to apply to the tabs' body.
 *
 * @returns {string} An HTML string representing the tabs component.
 */
export const Tabs = ({ tabs, options = {} }) => {
  const { className = "" } = options;

  // Generate HTML for tab buttons
  const tabsHtml = tabs
    .map(
      (tab, index) => `
        <li role="menuitem" class="${
          index === 0
            ? "tabs__navbar--tab tabs__navbar--tab--active"
            : "tabs__navbar--tab"
        }" data-tab="${tab.label}">
        ${tab.label}
        </li>
      `
    )
    .join("");

  // Generate HTML for tab content
  const tabContentsHtml = tabs
    .map(
      (tab, index) =>
        `<div style="display:${index === 0 ? "block" : "none"}" data-tab="${
          tab.label
        }">${tab.html}</div>`
    )
    .join("");

  return `
    <div class="tabs shadow rounded-sm">
        <nav aria-label="Tabs Navigation">
          <ul class="tabs__navbar" role="menu">
            ${tabsHtml}
          </ul>
        </nav>
        <div class="tabs__body ${className}">
          ${tabContentsHtml}
        </div>
    </div>
  `;
};

/**
 * Attaches click event listeners to the tabs navigation bar to switch between tabs.
 * Only one tab content is visible at a time based on the active tab.
 */
export const handleClickOnTabs = () => {
  const tabsNavbar = document.querySelector(".tabs__navbar");
  const tabsBody = document.querySelector(".tabs__body");

  // If the elements where not found, don't do anything
  if (!tabsNavbar || !tabsBody) return;

  const tabContents = Array.from(tabsBody.children);

  tabsNavbar.addEventListener("click", (e) => {
    // Ensure clicks on child elements still work
    const clickedTab = e.target.closest(".tabs__navbar--tab");
    // Ignore clicks that aren't on tabs
    if (!clickedTab) return;

    const tabData = clickedTab.getAttribute("data-tab");
    // Hide all tab content
    tabContents.forEach((content) => (content.style.display = "none"));
    // Show the clicked tab's content
    const activeContent = tabContents.find(
      (content) => content.getAttribute("data-tab") === tabData
    );

    if (activeContent) activeContent.style.display = "block";

    // Update active tab class
    document.querySelectorAll(".tabs__navbar--tab").forEach((tab) => {
      tab.classList.remove("tabs__navbar--tab--active");
    });

    clickedTab.classList.add("tabs__navbar--tab--active");
  });
};
