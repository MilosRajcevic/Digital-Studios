import toggleHamburgerMenu from "./controllerMenu";
import accordion from "./accordion";

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

accordion();
toggleHamburgerMenu();
