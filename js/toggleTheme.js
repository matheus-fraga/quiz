export function toggleTheme() {
    const iconTheme = document.getElementById("iconTheme");
    const currentTheme = document
        .getElementById("themeStylesheet")
        .getAttribute("href");
    const themeStylesheet = document.getElementById("themeStylesheet");
    const iconPlayer = document.getElementById("iconPlayer");
    if (currentTheme.includes("css/index-light.css")) {
        themeStylesheet.href = "css/index-dark.css";
        iconTheme.innerText = "dark_mode";
    } else {
        themeStylesheet.href = "css/index-light.css";
        iconTheme.innerText = "light_mode";
    }
}

export function initToggleTheme() {
    const toggleThemeButton = document.getElementById("toggleThemeButton");
    toggleThemeButton.addEventListener("click", toggleTheme);
}
