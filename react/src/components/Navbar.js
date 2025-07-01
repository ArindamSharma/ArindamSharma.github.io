import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { PERSONAL_INFO } from "../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('skills');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['skills', 'projects', 'experience'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      let current = 'skills';
      sectionElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHireMe = () => {
    if (PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#") {
      window.open(PERSONAL_INFO.resumeLink, '_blank');
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand" onClick={() => scrollToSection('home')}>
          <span className="brand-name">Arindam</span>
          <span className="brand-accent">Sharma</span>
        </div>
        <div className="navbar-menu">
          <button className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => scrollToSection('skills')}>
            <span className="nav-text">Skills</span>
          </button>
          <button className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => scrollToSection('projects')}>
            <span className="nav-text">Projects</span>
          </button>
          <button className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => scrollToSection('experience')}>
            <span className="nav-text">Experience</span>
          </button>
          <button className="nav-link hire-btn" onClick={handleHireMe}>
            <span className="nav-text">💼 Hire Me</span>
          </button>
        </div>
        <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              &times;
            </button>
          </div>
          <div className="mobile-menu-items">
            <button className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); scrollToSection('skills'); }}>
              <span className="mobile-nav-icon">⚡</span>
              <span className="mobile-nav-text">Skills</span>
            </button>
            <button className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); scrollToSection('projects'); }}>
              <span className="mobile-nav-icon">�</span>
              <span className="mobile-nav-text">Projects</span>
            </button>
            <button className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); scrollToSection('experience'); }}>
              <span className="mobile-nav-icon">🎯</span>
              <span className="mobile-nav-text">Experience</span>
            </button>
            <button className="mobile-nav-link hire-btn-mobile" onClick={() => { setMenuOpen(false); handleHireMe(); }}>
              <span className="mobile-nav-icon">�</span>
              <span className="mobile-nav-text">Hire Me</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
