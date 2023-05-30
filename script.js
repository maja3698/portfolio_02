// import AOS from 'aos';
// AOS.init();

let menu = document.getElementById("menu");
let nav = document.getElementById("navigation");
let exit = document.getElementById("exit");

let desktop = window.matchMedia("(min-width: 1234px)");

menu.addEventListener("click", function (e) {
  nav.classList.add("nav-transition");
  // e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
  // e.preventDefault();
});

nav.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
});

if (desktop.matches) {
}
function openNav() {
  document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}
