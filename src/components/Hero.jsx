import React from 'react';

const Hero = () => {
  const handleGetStartedClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Strategic Business Consulting</h1>
        <p>Transforming businesses through expert guidance and innovative solutions</p>
        <a href="#contact" className="cta-button" onClick={handleGetStartedClick}>
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;