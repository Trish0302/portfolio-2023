const body = $("body");
const themeToggle = $(".nav__buttons > i");

const header = $("header");

const navItem = $("ul.nav__list > li.nav__item");
const openNavItem = $(".nav__toggle");
const navClose = $(".nav__close");
const navMenu = $(".nav__menu");
const navToggle = $(".nav__toggle");
const navToggleIcon = $(".nav__toggle > i");

const mediaQuery = window.matchMedia("(min-width: 768px)");

window.onscroll = () => {
  if (window.scrollY > 0 && !mediaQuery.matches) {
    header.addClass("header--scrolled");
  } else {
    header.removeClass("header--scrolled");
  }

  navToggle
    .addClass(window.scrollY > 0 ? "nav_dark-text" : "nav_light-text")
    .removeClass(window.scrollY > 0 ? "nav_light-text" : "nav_dark-text");
};

toggleNavigation = (show) => {
  navMenu.toggleClass("nav__menu-show", show);
  navMenu.toggleClass("hidden");
  navClose.toggleClass("hidden");
  navToggle.toggleClass("hidden");
};

navItem.click((e) => {
  navMenu.find("a.nav__link").removeClass("active-link");

  e.target.classList.add("active-link");

  // $(this).addClass("active-link");

  toggleNavigation(false);
  swiper.slideTo(e.target.getAttribute("data-id"), 1300);
});

themeToggle.click(() => {
  body.toggleClass("dark-theme");
});

openNavItem.on("click", () => toggleNavigation(true));
navClose.on("click", () => toggleNavigation(false));

var swiper = new Swiper(".default-carousel", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  noSwipingClass: "swiper-slide_bg",
  // ,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});
