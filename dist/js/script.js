//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};

//Menu
const menu = document.querySelector("#menu");
const navMenu = document.querySelector("#nav-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("menu-active");
  navMenu.classList.toggle("hidden");
});

//Klik di luar menu
window.addEventListener("click", function (e) {
  if (e.target != menu && e.target != navMenu) {
    menu.classList.remove("menu-active");
    navMenu.classList.add("hidden");
  }
});

//Dark Mode
const checkbok = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

checkbok.addEventListener("click", function () {
  if (checkbok.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

//Mode Toggel
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  checkbok.checked = true;
} else {
  checkbok.checked = false;
}
