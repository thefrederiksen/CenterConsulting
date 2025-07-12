import React from 'react';

const Header = () => {
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

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>CenterConsulting</h1>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;