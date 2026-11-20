// Get the theme toggle button
const themeToggle = document.getElementById("themeToggle");

// Apply the saved theme when the page loads
const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
} else {
    document.body.classList.remove("light-theme");
}

// Update the button icon
function updateThemeIcon() {
    if (document.body.classList.contains("light-theme")) {
        themeToggle.textContent = "☀";
        themeToggle.setAttribute("aria-label", "Switch to dark mode");
        themeToggle.setAttribute("title", "Switch to dark mode");
    } else {
        themeToggle.textContent = "☾";
        themeToggle.setAttribute("aria-label", "Switch to light mode");
        themeToggle.setAttribute("title", "Switch to light mode");
    }
}

// Set the initial icon
if (themeToggle) {
    updateThemeIcon();

    // Switch theme when the button is clicked
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");

        // Save the selected theme
        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";

        localStorage.setItem("portfolio-theme", currentTheme);

        updateThemeIcon();
    });
}