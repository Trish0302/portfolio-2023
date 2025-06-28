import React from 'react';

const EducationSection: React.FC = () => {
  return (
    <section className="education section" id="education">
      <h2 className="section__title">Education</h2>
      <div className="experience_content_education">
        <div>
          <h3 className="experience_content_title">Bachelor's Degree</h3>
          <span>Computer Science - University of Technology</span>
        </div>
        <div>
          <h3 className="experience_content_title">Master's Degree</h3>
          <span>Web Development - Design Institute</span>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
