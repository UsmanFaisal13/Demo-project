const btn = document.getElementById("btn");
const menu = document.getElementById("menu");
const hamburgerIcon = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden"); // Toggle menu visibility
  hamburgerIcon.classList.toggle("hidden"); // Toggle hamburger icon
  closeIcon.classList.toggle("hidden"); // Toggle close icon
});
