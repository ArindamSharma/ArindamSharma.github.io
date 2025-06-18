import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">Arindam Sharma</div>
      <div className="navbar-right">
        <button className="nav-btn"><a href="#about">Home</a></button>
        <button className="nav-btn"><a href="#projects">Projects</a></button>
        <button className="nav-btn"><a href="#experience">Experiences</a></button>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(true)}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {menuOpen && (
        <div className={`mobile-menu${!menuOpen ? ' menu-exit' : ''}`}>
          <div className="mobile-menu-header">
            <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close Menu">
              <span style={{fontSize: '2rem', lineHeight: 1}}>&times;</span>
            </button>
          </div>
          <button className="nav-btn" onClick={() => setMenuOpen(false)}><a href="#about">Home</a></button>
          <button className="nav-btn" onClick={() => setMenuOpen(false)}><a href="#projects">Projects</a></button>
          <button className="nav-btn" onClick={() => setMenuOpen(false)}><a href="#experience">Experiences</a></button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
