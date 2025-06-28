import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact</h2>
      <div className="contact__container">
        <div className="contact__info">
          <h3>Get in touch</h3>
          <p>Feel free to reach out to me for any inquiries or collaborations.</p>
          <div className="contact__details">
            <p><i className="ri-mail-line"></i> email@example.com</p>
            <p><i className="ri-phone-line"></i> +123 456 7890</p>
            <p><i className="ri-map-pin-line"></i> Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
