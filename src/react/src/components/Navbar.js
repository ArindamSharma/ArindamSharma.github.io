import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { PERSONAL_INFO } from "../constants";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    // Update URL hash
    window.location.hash = sectionId;
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      // Update active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'experience', 'education', 'achievements', 'hire'];
      const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);
      
      let current = 'about';
      sectionElements.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      
      // Only update if the section actually changed to avoid infinite loops
      setActiveSection(prevActive => {
        if (current !== prevActive) {
          // Update URL hash without triggering scroll
          if (window.location.hash !== `#${current}`) {
            window.history.replaceState(null, null, `#${current}`);
          }
          return current;
        }
        return prevActive;
      });
    };

    // Handle hash navigation on page load and hash changes
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
        // Scroll to section after a brief delay to ensure page is loaded
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Default to 'about' if no hash
        setActiveSection('about');
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
        <button onClick={() => scrollToSection('about')} className="navbar-brand">
          <span className="brand-name">Arindam</span>
          <span className="brand-accent">Sharma</span>
        </button>
        <div className="navbar-menu">
          {/* <button onClick={() => scrollToSection('about')} className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>
            <span className="nav-text">About</span>
          </button> */}
          <button onClick={() => scrollToSection('projects')} className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
            <span className="nav-text">Projects</span>
          </button>
          <button onClick={() => scrollToSection('experience')} className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
            <span className="nav-text">Experience</span>
          </button>
          <button onClick={() => scrollToSection('education')} className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}>
            <span className="nav-text">Education</span>
          </button>
          <button onClick={() => scrollToSection('skills')} className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
            <span className="nav-text">Skills</span>
          </button>
          <a href={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? PERSONAL_INFO.resumeLink : "#"} 
             target={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "_blank" : "_self"}
             rel={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "noreferrer" : undefined}
             className="nav-link hire-btn">
            <span className="nav-text">View Resume</span>
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
            <button onClick={() => scrollToSection('about')} className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}>
              <span className="mobile-nav-text">About</span>
            </button>
            <button onClick={() => scrollToSection('experience')} className={`mobile-nav-link ${activeSection === 'experience' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Experience</span>
            </button>
            <button onClick={() => scrollToSection('projects')} className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Projects</span>
            </button>
            <button onClick={() => scrollToSection('education')} className={`mobile-nav-link ${activeSection === 'education' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Education</span>
            </button>
            <button onClick={() => scrollToSection('skills')} className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Skills</span>
            </button>
            <a href={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? PERSONAL_INFO.resumeLink : "#"}
               target={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "_blank" : "_self"}
               rel={PERSONAL_INFO.resumeLink && PERSONAL_INFO.resumeLink !== "#" ? "noreferrer" : undefined}
               className="mobile-nav-link hire-btn-mobile" onClick={() => setMenuOpen(false)}>
              <span className="mobile-nav-text">View Resume</span>
            </a>
            <div className="mobile-nav-separator"></div>
            <button onClick={() => scrollToSection('projects')} className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}>
              <span className="mobile-nav-text">All Projects</span>
            </button>
            <button onClick={() => scrollToSection('achievements')} className={`mobile-nav-link ${activeSection === 'achievements' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Achievements</span>
            </button>
            <button onClick={() => scrollToSection('hire')} className={`mobile-nav-link ${activeSection === 'hire' ? 'active' : ''}`}>
              <span className="mobile-nav-text">Contact</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
