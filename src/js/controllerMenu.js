import { activeClassName } from "./config";

const mobMenu = document.querySelector(".js-mob-menu");
const navList = document.querySelector(".js-nav-list");
const navItem = document.querySelectorAll(".nav__item");
const html = document.querySelector(".js");

export default function toggleHamburgerMenu() {
  mobMenu.addEventListener("click", function () {
    [navList, mobMenu].forEach((el) => el.classList.toggle(activeClassName));
    // html.classList.toggle("no-scroll");
  });
}
