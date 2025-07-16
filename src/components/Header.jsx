import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const homeSection = document.getElementById('home');
      if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    // else, let Link do the navigation
  };

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>CenterConsulting</h1>
          </div>
          <ul className="nav-menu">
            <li>
              <Link to="/" onClick={handleHomeClick}>Home</Link>
            </li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
            <li><a href="/ai-agent">AI Agent Architecture</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;