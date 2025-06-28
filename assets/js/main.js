const body = $("body");
const themeToggle = $(".nav__buttons > i");

const header = $("header");

const navItem = $("ul.nav__list > li.nav__item");
const openNavItem = $(".nav__toggle");
const navClose = $(".nav__close");
const navMenu = $(".nav__menu");
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
  // ,
  // autoplay: {
  //   delay: 5000,
  //   disableOnInteraction: false,
  // },
});

swiper.on("slideChangeTransitionEnd", () => {
  $(".swiper-slide-active .section__title").addClass("content-animation");
});

// Add event to next button
$(".swiper-button-next.enabled").click(function () {
  // Disable swiper buttons so user doesnt click again
  // $(".swiper-button").removeClass("enabled");
  // // Set timeout for next slide move
  // setTimeout(function () {
  //   // Move to next slide
  //   swiper.slideNext();
  //   // Re-enable swiper buttons
  //   $(".swiper-button").addClass("enabled");
  // }, swiperDelay);
});

swiper.on("slideChangeTransitionStart", () => {
  // $(".swiper-slide-active .section__title").addClass("slide_out");
  // console.log(swiper.activeIndex);
});

async function delayWithLog(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log(swiper.activeIndex);
      console.log(123);

      resolve(); // Only now continue to slideNext
    }, ms);
  });
}

// swiperNextButton.click(async (e) => {
//   console.log(123);
//   $(".swiper-slide-active .section__title").addClass("slide_out");

//   setTimeout(() => {
//     $(".swiper-slide-active .section__title").removeClass("slide_out");
//     swiper.slideNext();
//   }, 750);
// });

// swiperPrevButton.click(() => {
//   console.log(swiper.currentIndex);

//   $(".swiper-slide-active .section__title").addClass("slide_out");

//   setTimeout(() => {
//     $(".swiper-slide-active .section__title").removeClass("slide_out");
//     swiper.slidePrev();
//   }, 750);
// });

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
  navMenu.toggleClass("hidden");
  navClose.toggleClass("hidden");
  navToggle.toggleClass("hidden");
  navItem.removeClass("showNavItem");
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
  swiper.slideTo(e.target.getAttribute("data-id"));
});

themeToggle.click(() => {
  body.toggleClass("dark-theme");
});

openNavItem.on("click", () => toggleNavigation(true));
navClose.on("click", () => toggleNavigation(false));

swiperNextButton.click(() => handleSwiperNavigation("next"));
swiperPrevButton.click(() => handleSwiperNavigation("prev"));
