import { useEffect, useState, useRef } from "react";
import Navigation from "../organisms/Navigation";
import HomeSection from "../organisms/HomeSection";
import ExperienceSection from "../organisms/ExperienceSection";
import EducationSection from "../organisms/EducationSection";
import ProjectsSection from "../organisms/ProjectsSection";
import ContactSection from "../organisms/ContactSection";

import "./../../styles/swiper.css";

const PortfolioTemplate = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const swiperRef = useRef<any>(null);

  // Effect for handling the Swiper initialization
  useEffect(() => {
    if (typeof window !== "undefined") {
      const initSwiper = async () => {
        try {
          // Import Swiper and required modules
          const { default: Swiper } = await import("swiper");
          const { Navigation, Pagination } = await import("swiper/modules");

          // Register modules
          Swiper.use([Navigation, Pagination]);

          const swiper = new Swiper(".swiper", {
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 800,
            loop: false,
            initialSlide: 0,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              bulletClass: "swiper-pagination-bullet",
              bulletActiveClass: "swiper-pagination-bullet-active",
            },
            navigation: {
              nextEl: "#slider-button-right",
              prevEl: "#slider-button-left",
            },
            on: {
              slideChange: () => {
                // setActiveSection(swiper.activeIndex);
                console.log(123);
              },
            },
          });

          swiperRef.current = swiper;
        } catch (error) {
          console.error("Error initializing Swiper:", error);
        }
      };

      initSwiper();

      // Clean up on unmount
      return () => {
        if (swiperRef.current) {
          swiperRef.current.destroy(true, true);
          swiperRef.current = null;
        }
      };
    }
  }, []);

  // Effect for handling pointer events
  useEffect(() => {
    // Swiper handles touch events internally, so we don't need to implement custom pointer handling
    // This effect is kept as a placeholder in case we need to add custom pointer handling in the future
  }, []);

  // Effect for handling navigation button clicks
  useEffect(() => {
    const handleSliderButtonLeft = () => {
      // if (swiperRef.current) {
      //   swiperRef.current.slidePrev();
      // }
    };

    const handleSliderButtonRight = () => {
      // if (swiperRef.current) {
      //   swiperRef.current.slideNext();
      // }
    };

    // Add event listeners
    if (typeof document !== "undefined") {
      const leftButton = document.getElementById("slider-button-left");
      const rightButton = document.getElementById("slider-button-right");

      if (leftButton) {
        leftButton.addEventListener("click", handleSliderButtonLeft);
      }

      if (rightButton) {
        rightButton.addEventListener("click", handleSliderButtonRight);
      }

      // Clean up event listeners
      return () => {
        if (leftButton) {
          leftButton.removeEventListener("click", handleSliderButtonLeft);
        }

        if (rightButton) {
          rightButton.removeEventListener("click", handleSliderButtonRight);
        }
      };
    }

    return undefined;
  }, []);

  const handleNavItemClick = (id: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(id);
      setActiveSection(id);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev: boolean) => !prev);
    if (typeof document !== "undefined") {
      document.body.classList.toggle("dark-theme");
    }
  };

  const toggleNavigation = (show: boolean) => {
    setIsMenuOpen(show);
  };

  return (
    <>
      <Navigation
        activeSection={activeSection}
        onNavItemClick={handleNavItemClick}
        onToggleTheme={toggleTheme}
        isDarkTheme={isDarkTheme}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleNavigation}
      />

      <main className="main absolute top-0 !h-screen">
        <div className="home__container !h-screen">
          <div className="relative w-screen !h-full">
            <div className="swiper h-screen relative">
              <div className="swiper-wrapper !h-screen">
                <div className="swiper-slide flex! items-center justify-center">
                  <HomeSection />
                </div>
                <div className="swiper-slide flex! items-center justify-center">
                  <ExperienceSection />
                </div>
                <div className="swiper-slide flex! items-center justify-center">
                  <EducationSection />
                </div>
                <div className="swiper-slide flex! items-center justify-center">
                  <ProjectsSection />
                </div>
                <div className="swiper-slide flex! items-center justify-center">
                  <ContactSection />
                </div>
              </div>

              {/* Navigation arrows */}
              <div
                className="slider-button absolute !bottom-0"
                id="slider-button-left"
              >
                <i className="ri-arrow-left-s-line"></i>
              </div>
              <div
                className="slider-button  absolute !bottom-0"
                id="slider-button-right"
              >
                <i className="ri-arrow-right-s-line"></i>
              </div>

              {/* Pagination */}
              <div className="swiper-pagination flex items-center justify-center gap-10"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PortfolioTemplate;
