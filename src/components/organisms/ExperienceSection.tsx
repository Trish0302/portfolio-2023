import React from 'react';

const ExperienceSection: React.FC = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">Experience</h2>
      <div className="experience__wrapper">
        <div className="experience_content_experience">
          <h3 className="experience_content_title">Work Experience</h3>
          <ul id="progress">
            <li>
              <div className="node">
                <img src="/assets/img/node.svg" alt="node" />
              </div>
              <p>
                <span className="text-bold">Frontend Developer</span> - XYZ Company<br />
                2022 - Present
              </p>
            </li>
            <li>
              <div className="node">
                <img src="/assets/img/node.svg" alt="node" />
              </div>
              <p>
                <span className="text-bold">UI/UX Designer</span> - ABC Studio<br />
                2020 - 2022
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
