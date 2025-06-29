import { useEffect, useState } from "react";
import NavItem from "../molecules/NavItem";
import "./../../styles/navigation.css";

interface NavigationProps {
  activeSection: number;
  onNavItemClick: (id: number) => void;
  onToggleTheme: () => void;
  isDarkTheme: boolean;
  isMenuOpen: boolean;
  onToggleMenu: (show: boolean) => void;
}
const Navigation = ({
  activeSection,
  onNavItemClick,
  onToggleTheme,
  isDarkTheme,
  isMenuOpen,
  onToggleMenu,
}: NavigationProps) => {

  const handleMenuToggle = () => {
    onToggleMenu(true);
  };

  const handleCloseMenu = () => {
    onToggleMenu(false);
  };

  useEffect(() => {

    const navMenu = document.querySelector(".nav__menu");
    const navOverlay = document.querySelector(".nav__overlay");

    if (isMenuOpen) {
      navMenu?.classList.add("show-menu");
      navOverlay?.classList.add("show-overlay");
      console.log(123);
      
    } else {
      navMenu?.classList.remove("show-menu");
      navOverlay?.classList.remove("show-overlay");
      // navClose?.classList.remove("hidden");
    }
  }, [isMenuOpen]);

  const handleNavItemClick = (id: number) => {
    onNavItemClick(id);
    onToggleMenu(false);
  };

  return (
    <header className="header content-center relative" id="header">
      <nav className="nav flex justify-between items-center">
        <a href="#" id="nav__logo" className="">
          Trish Lee
        </a>

        <div className="nav__menu">
          {/* <div className="nav__close-btn" onClick={handleCloseMenu}>
            <i className="ri-close-line"></i>
          </div> */}

          <ul className="nav__list !flex !flex-col !items-center gap-5">
            <NavItem
              id={0}
              title="Home"
              icon="ri-home-5-line"
              active={activeSection === 0}
              onClick={() => handleNavItemClick(0)}
            />
            <NavItem
              id={1}
              title="Experience"
              icon="ri-briefcase-4-line"
              active={activeSection === 1}
              onClick={() => handleNavItemClick(1)}
            />
            <NavItem
              id={2}
              title="Education"
              icon="ri-book-open-line"
              active={activeSection === 2}
              onClick={() => handleNavItemClick(2)}
            />
            <NavItem
              id={3}
              title="Projects"
              icon="ri-folder-5-line"
              active={activeSection === 3}
              onClick={() => handleNavItemClick(3)}
            />
            <NavItem
              id={4}
              title="Contact"
              icon="ri-mail-line"
              active={activeSection === 4}
              onClick={() => handleNavItemClick(4)}
            />
          </ul>
        </div>

        <div className="nav__buttons">
          {/* <div className="nav__overlay" onClick={handleCloseMenu}></div> */}

          <div className="change-theme" onClick={onToggleTheme}>
            <i className={isDarkTheme ? "ri-sun-line" : "ri-moon-line"}></i>
          </div>

          <div className={`menu-toggle ${isMenuOpen ? "hidden" : ""}`} onClick={handleMenuToggle}>
            <i className="ri-menu-4-line"></i>
          </div>

          <div className={`nav__close ${isMenuOpen ? "" : "hidden"}`} onClick={handleCloseMenu}>
            <i className="ri-close-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
