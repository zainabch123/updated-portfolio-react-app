import { useRef } from 'react';

import './navBar.css';

const NavBar = ({scrollableRef}) => {

  const scrollToTop = () => {
    scrollableRef.current.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  return (
    <nav className="navigation-bar">
      <div className="nav-buttons">
        <a href="#" id="nav-name" onClick={scrollToTop}>
          Zainab Choudhry
        </a>
        <a href="#navigation-bar" id="nav-initials">
          ZC
        </a>
        <a className="nav-links" href="#about-section">
          About
        </a>
        <a className="nav-links" href="#projects-section">
          Projects
        </a>
        <a className="nav-links" href="#skills-section">
          Skills
        </a>
        <a className="nav-links" href="#contact-section">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;