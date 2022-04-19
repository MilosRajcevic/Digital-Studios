import toggleHamburgerMenu from "./controllerMenu";
import accordion from "./accordion";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",

  navigation: {
    nextEl: ".js-btn-right",
    prevEl: ".js-btn-left",
  },
});

accordion();
toggleHamburgerMenu();
