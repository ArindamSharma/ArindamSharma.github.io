import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-name">Arindam</span>
          <span className="brand-accent">Sharma</span>
        </div>
        <div className="navbar-menu">
          <button className="nav-link" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
            Home
          </button>
          <button className="nav-link" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            About
          </button>
          <button className="nav-link" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>
            Skills
          </button>
          <button className="nav-link" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            Projects
          </button>
          <button className="nav-link" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
            Experience
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
            <button className="mobile-nav-link" onClick={() => { setMenuOpen(false); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Home
            </button>
            <button className="mobile-nav-link" onClick={() => { setMenuOpen(false); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}>
              About
            </button>
            <button className="mobile-nav-link" onClick={() => { setMenuOpen(false); document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Skills
            </button>
            <button className="mobile-nav-link" onClick={() => { setMenuOpen(false); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Projects
            </button>
            <button className="mobile-nav-link" onClick={() => { setMenuOpen(false); document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }); }}>
              Experience
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
