const navItem = $(".nav__item");
const openNavItem = $(".nav__toggle");
const closeNavItem = $(".nav__close");

const navMenu = $(".nav__menu");
const overlay = $(".overlay");

const mediaQuery = window.matchMedia("(min-width: 768px)");

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

openNavItem.on("click", () => toggleNavigation(true));
closeNavItem.on("click", () => toggleNavigation(false));
