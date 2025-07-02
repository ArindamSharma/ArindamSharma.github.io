import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Navbar.css";
import { PERSONAL_INFO } from "../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'achievements', 'hire'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      let current = 'about';
      sectionElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        // Scroll to section after a brief delay to ensure page is loaded
        setTimeout(() => {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };

    // Check for hash on initial load
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="/#about" className="navbar-brand">
          <span className="brand-name">Arindam</span>
          <span className="brand-accent">Sharma</span>
        </a>
        <div className="navbar-menu">
          <a href="/#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            <span className="nav-text">About</span>
          </a>
          <a href="/#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            <span className="nav-text">Skills</span>
          </a>
          <a href="/#projects" className={`nav-link ${location.pathname === 'projects' ? 'active' : ''}`}>
            <span className="nav-text">Projects</span>
          </a>
          <a href="/#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <span className="nav-text">Experience</span>
          </a>
          <a href={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? PERSONAL_INFO.resumeLink : "#"} 
             target={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "_blank" : "_self"}
             rel={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "noreferrer" : undefined}
             className="nav-link hire-btn">
            <span className="nav-text">💼 Hire Me</span>
          </a>
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
            <a href="/#about" className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-icon">👤</span>
              <span className="mobile-nav-text">About</span>
            </a>
            <a href="/#skills" className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-icon">⚡</span>
              <span className="mobile-nav-text">Skills</span>
            </a>
            <a href="/projects" className={`mobile-nav-link ${location.pathname === '/projects' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-icon">🚀</span>
              <span className="mobile-nav-text">Projects</span>
            </a>
            <a href="/#experience" className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-icon">🎯</span>
              <span className="mobile-nav-text">Experience</span>
            </a>
            <a href={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? PERSONAL_INFO.resumeLink : "#"}
               target={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "_blank" : "_self"}
               rel={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "noreferrer" : undefined}
               className="mobile-nav-link hire-btn-mobile" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-icon">💼</span>
              <span className="mobile-nav-text">Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
