const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");

const storedTheme = window.localStorage.getItem("alpha-mark-theme");
if (storedTheme === "dark") {
  root.classList.add("dark");
}

function renderIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateThemeIcon() {
  if (!toggle) return;
  const isDark = root.classList.contains("dark");
  toggle.innerHTML = `<i data-lucide="${isDark ? "sun" : "moon"}"></i>`;
  toggle.setAttribute("aria-label", isDark ? "切换到浅色主题" : "切换到深色主题");
  renderIcons();
}

toggle?.addEventListener("click", () => {
  root.classList.toggle("dark");
  window.localStorage.setItem(
    "alpha-mark-theme",
    root.classList.contains("dark") ? "dark" : "light",
  );
  updateThemeIcon();
});

window.addEventListener("DOMContentLoaded", () => {
  updateThemeIcon();
  renderIcons();
});
