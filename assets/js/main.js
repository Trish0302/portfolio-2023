const body = $("body");
const themeToggle = $(".nav__buttons > i");

const header = $("header");

const navItem = $(".nav__item");
const openNavItem = $(".nav__toggle");
const closeNavItem = $(".nav__close");
const navMenu = $(".nav__menu");
const navToggle = $(".nav__toggle");
const navToggleIcon = $(".nav__toggle > i");

const overlay = $(".overlay");

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
  closeNavItem.toggleClass("nav__close-show", show);
  overlay.toggleClass("show", show);
};

resolveResponsiveNavItem = (element) => {
  return new Promise((resolve) => {
    setTimeout(
      () => {
        console.log(456);
        $(element).toggleClass("active-link");
        resolve(element);
      },
      mediaQuery.matches ? 0 : 850
    );
  });
};

callResponsiveNavItem = async (element) => {
  console.log(123);

  await resolveResponsiveNavItem(element);

  console.log(789);

  navMenu.toggleClass("nav__menu-show");
  overlay.toggleClass("show");
};

navItem.click((e) => {
  navMenu.find("a.nav__link").removeClass("active-link");
  callResponsiveNavItem(e.target);
});

themeToggle.click(() => {
  body.toggleClass("dark-theme");
});

openNavItem.on("click", () => toggleNavigation(true));
closeNavItem.on("click", () => toggleNavigation(false));
