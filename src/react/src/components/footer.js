import React from "react";
import "./footer.css";
import { PERSONAL_INFO } from "../constants";

// Footer Component
function Footer({ navigateToProjects, navigateToHome, navigateToBlogs }) {
    const scrollToSection = (sectionId) => {
        // Check if we're on the home page (no hash or empty hash)
        const currentHash = window.location.hash;
        if (currentHash === '' || currentHash === '#') {
            // We're on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // We're not on home page, navigate to home and then scroll
            window.location.hash = '';
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // Small delay to allow page to load
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content-columns">
                <div className="footer-column">
                    <h4 className="footer-column-title">Follow Me</h4>
                    <div className="footer-social-links">
                        {PERSONAL_INFO.SOCIAL_LINKS.map((social, index) => (
                            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <img 
                                    src={social.icon} 
                                    alt={social.name} 
                                    className="footer-icon"
                                    style={{width: '20px', height: '20px', filter: 'invert(1)'}}
                                />
                                <span>{social.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
                
                <div className="footer-column">
                    <h4 className="footer-column-title">Navigate</h4>
                    <div className="footer-nav-links">
                        <button onClick={() => scrollToSection('about')} className="footer-nav-link">
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="footer-nav-link">
                            Skills
                        </button>
                        <button onClick={navigateToProjects} className="footer-nav-link">
                            All Projects
                        </button>
                        <button onClick={() => scrollToSection('fproject')} className="footer-nav-link">
                            Feature Projects
                        </button>
                        <button onClick={navigateToBlogs} className="footer-nav-link">
                            Blogs
                        </button>
                        <button onClick={() => scrollToSection('experience')} className="footer-nav-link">
                            Experience
                        </button>
                        <button onClick={() => scrollToSection('achievements')} className="footer-nav-link">
                            Achievements
                        </button>
                        <button onClick={() => scrollToSection('hire')} className="footer-nav-link">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="footer-copyright">
                <p>{PERSONAL_INFO.name} © {new Date().getFullYear()} | All rights reserved.</p>
                <div className="footer-status">
                    <span className="status-dot"></span>
                    <span>{PERSONAL_INFO.CONTACT_INFO.availability}</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;