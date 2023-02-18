const navItem = $(".nav__item");

navItem.click((e) => {
    navItem.each((index, element) => {
        $(element).children().removeClass("active-link");
    });
    $(e.target).addClass("active-link");
});

const toggleItem = $(".nav__toggle");
const navMenu = $(".nav__menu");

toggleItem.on("click", () => {
    navMenu.toggleClass("nav__menu-show");
});
