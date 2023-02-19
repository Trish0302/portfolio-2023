const navItem = $(".nav__item");

navItem.click((e) => {
    navItem.each((index, element) => {
        $(element).children().removeClass("active-link");
    });
    $(e.target).addClass("active-link");
    closeNavItem.click();
});

const openNavItem = $(".nav__toggle");
const navMenu = $(".nav__menu");
const overlay = $(".overlay");
const closeNavItem = $(".nav__close");

openNavItem.on("click", () => {
    navMenu.addClass("nav__menu-show");
    closeNavItem.addClass("nav__close-show");
    overlay.css("display", "block");
});

closeNavItem.on("click", () => {
    navMenu.removeClass("nav__menu-show");
    closeNavItem.removeClass("nav__close-show");
    overlay.css("display", "none");
});
