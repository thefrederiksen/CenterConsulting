import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/ai-agent" className="cta-button">
          AI Agent Architecture and development
        </Link>
      </div>
    </section>
  );
};

export default Hero;