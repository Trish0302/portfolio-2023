import { useEffect, useState, useRef } from 'react';
import Navigation from '../organisms/Navigation';
import HomeSection from '../organisms/HomeSection';
import ExperienceSection from '../organisms/ExperienceSection';
import EducationSection from '../organisms/EducationSection';
import ProjectsSection from '../organisms/ProjectsSection';
import ContactSection from '../organisms/ContactSection';
// Import Swiper core and required modules
import Swiper from 'swiper';

const PortfolioTemplate = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const swiperRef = useRef<any>(null);

  // Effect for handling the Swiper initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initSwiper = async () => {
        try {
          // Import Swiper and required modules
          const { default: Swiper } = await import('swiper');
          const { Navigation, Pagination } = await import('swiper/modules');
          
          // Register modules
          Swiper.use([Navigation, Pagination]);
          
          const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 0,
            grabCursor: true,
            speed: 800,
            loop: false,
            initialSlide: 0,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            },
            navigation: {
              nextEl: '#slider-button-right',
              prevEl: '#slider-button-left',
            },
            on: {
              slideChange: () => {
                setActiveSection(swiper.activeIndex);
              }
            }
          });

          swiperRef.current = swiper;
        } catch (error) {
          console.error('Error initializing Swiper:', error);
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
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const handleSliderButtonRight = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };

    // Add event listeners
    if (typeof document !== 'undefined') {
      const leftButton = document.getElementById('slider-button-left');
      const rightButton = document.getElementById('slider-button-right');

      if (leftButton) {
        leftButton.addEventListener('click', handleSliderButtonLeft);
      }

      if (rightButton) {
        rightButton.addEventListener('click', handleSliderButtonRight);
      }

      // Clean up event listeners
      return () => {
        if (leftButton) {
          leftButton.removeEventListener('click', handleSliderButtonLeft);
        }

        if (rightButton) {
          rightButton.removeEventListener('click', handleSliderButtonRight);
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
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('dark-theme');
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

      <main className="main">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <HomeSection />
            </div>
            <div className="swiper-slide">
              <ExperienceSection />
            </div>
            <div className="swiper-slide">
              <EducationSection />
            </div>
            <div className="swiper-slide">
              <ProjectsSection />
            </div>
            <div className="swiper-slide">
              <ContactSection />
            </div>
          </div>
          
          {/* Navigation arrows */}
          <div className="slider-button" id="slider-button-left">
            <i className="ri-arrow-left-s-line"></i>
          </div>
          <div className="slider-button" id="slider-button-right">
            <i className="ri-arrow-right-s-line"></i>
          </div>
          
          {/* Pagination */}
          <div className="swiper-pagination"></div>
        </div>
      </main>
    </>
  );
};

export default PortfolioTemplate;
