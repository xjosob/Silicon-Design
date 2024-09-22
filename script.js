const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme") || "light-theme";
const body = document.body;

body.classList.add(savedTheme);

themeToggle.checked = savedTheme === "dark-theme";

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light-theme");
  }
});
