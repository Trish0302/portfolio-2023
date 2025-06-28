import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section__title">Projects</h2>
      <div className="services">
        <div className="services__container">
          <div className="services__card">
            <h3>Web Development</h3>
            <p>Creating modern and responsive websites using the latest technologies.</p>
          </div>
          <div className="services__card">
            <h3>UI/UX Design</h3>
            <p>Designing beautiful and intuitive user interfaces for web and mobile applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
