const body = $("body");
const themeToggle = $(".nav__buttons > i");

const header = $("header");

const overlay = $(".overlay");

const navMenu = $(".nav__menu");
const navItem = $("ul.nav__list > li.nav__item");
const navLinks = $("ul.nav__list > li.nav__item > a.nav__link");
const openNavItem = $(".nav__toggle");
const navClose = $(".nav__close");

const navToggle = $(".nav__toggle");
const navToggleIcon = $(".nav__toggle > i");

const swiperNextButton = $(".swiper-button-next");
const swiperPrevButton = $(".swiper-button-prev");

const mediaQuery = window.matchMedia("(min-width: 768px)");

var swiper = new Swiper(".default-carousel", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "",
    prevEl: "",
  },
  noSwipingClass: "swiper-slide_bg",
  speed: "300",
  autoplay: false,
  touchRatio: false,
  simulateTouch: false,
  // ,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});

startPos = [0, 0];

body.on("pointerdown", (e) => {
  startPos = [e.clientX, e.clientY];
});

body.on("pointerup", (e) => {
  endPos = [e.clientX, e.clientY];
  if (Math.abs(endPos[0] - startPos[0]) < 20) return;

  $(".swiper-slide-active .section__title").addClass("content_slide_out");

  setTimeout(() => {
    $(".swiper-slide-active .section__title").removeClass("content_slide_out");

    if (endPos[0] < startPos[0]) swiper.slidePrev();
    if (endPos[0] > startPos[0]) swiper.slideNext();
  }, 750);
});

swiper.on("slideChangeTransitionEnd", () => {
  $(".swiper-slide-active .section__title").addClass("content-animation");
});

handleSwiperNavigation = (direction) => {
  $(".swiper-slide-active .section__title").addClass("content_slide_out");
  setTimeout(() => {
    $(".swiper-slide-active .section__title").removeClass("content_slide_out");
    if (direction === "next") {
      swiper.slideNext();
    } else if (direction === "prev") {
      swiper.slidePrev();
    }
  }, 750);
};

window.onscroll = () => {
  navToggle
    .addClass(window.scrollY > 0 ? "nav_dark-text" : "nav_light-text")
    .removeClass(window.scrollY > 0 ? "nav_light-text" : "nav_dark-text");
};

toggleNavigation = (show) => {
  navMenu.toggleClass("nav__menu-show", show);
  navMenu.toggleClass("hiddenNav");
  navClose.toggleClass("hidden");
  navToggle.toggleClass("hidden");
  navItem.removeClass("showNavItem");

  setTimeout(() => {
    overlay.toggleClass("hidden");
  }, 1000);
};

navMenu.on("animationend", function (e) {
  if (e.target === navMenu[0]) {
    console.log(123);
    navItem.toggleClass("showNavItem");
  }
});

navItem.click((e) => {
  navMenu.find("a.nav__link").removeClass("active-link");
  e.target.classList.add("active-link");
  toggleNavigation(false);

  setTimeout(() => {
    swiper.slideTo(e.target.getAttribute("data-id"));
  }, 350);
});

themeToggle.click(() => {
  body.toggleClass("dark-theme");
});

openNavItem.on("click", () => toggleNavigation(true));
navClose.on("click", () => toggleNavigation(false));

swiperNextButton.click(() => handleSwiperNavigation("next"));
swiperPrevButton.click(() => handleSwiperNavigation("prev"));
