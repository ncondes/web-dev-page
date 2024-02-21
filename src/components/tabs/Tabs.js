// options: { bodyHeight: "16rem" }

export const Tabs = ({ tabs, options = {} }) => {
  const { className = "" } = options;

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

  const tabContentsHtml = tabs
    .map(
      (tab, index) =>
        `<div style="display:${index === 0 ? "block" : "none"}" data-tab="${
          tab.label
        }">${tab.html}</div>`
    )
    .join("");

  return `
    <div class="tabs shadow">
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
