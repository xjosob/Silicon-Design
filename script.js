const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
  } else {
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
  }
});
