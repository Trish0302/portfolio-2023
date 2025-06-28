import React from 'react';

const HomeSection = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container">
        <div className="home__content">
          <div className="home__content_job_tags">
            <p>Frontend Developer</p>
            <p>UI/UX Designer</p>
          </div>
          <h1 className="home__content-name">
            LÊ NGUYÊN MINH TRÍ
          </h1>
          <p className="home__content-description">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
          </p>
          <div className="home_buttons">
            <a href="/resume.pdf" download className="btn btn-primary">
              Download my CV
            </a>
            <a href="#contact" className="btn btn-primary">
              Wanna have a sip?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
