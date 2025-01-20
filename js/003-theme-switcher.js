// 003 theme switcher
// save theme in local storage
const colorThemes = document.querySelectorAll('[name="theme"]');
// store theme
const storeTheme = function(theme) {
  localStorage.setItem("theme", theme);
}

const retrieveTheme = function() {
  const activeTheme = localStorage.getItem("theme");
  colorThemes.forEach(themeOption => {
    if (themeOption.id === activeTheme) {
      themeOption.checked = true;
    }
  });
}

colorThemes.forEach(themeOption => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});
// apply theme
document.onload = retrieveTheme();