import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./footer.css";
import { PERSONAL_INFO } from "../constants";

// Footer Component
function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // Check if we're on the main page or sub-pages
    const isMainPage = location.pathname === '/';
    
    // Navigation functions
    const scrollToSection = (sectionId) => {
        if (isMainPage) {
            // If on main page, scroll to section
            document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on sub-page, navigate to main page with hash
            navigate(`/#${sectionId}`);
        }
    };

    const goHome = () => {
        navigate('/');
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
                        {!isMainPage && (
                            <button onClick={goHome} className="footer-nav-link">
                                Home
                            </button>
                        )}
                        <button onClick={() => scrollToSection('about')} className="footer-nav-link">
                            About
                        </button>
                        <button onClick={() => scrollToSection('skills')} className="footer-nav-link">
                            Skills
                        </button>
                        <button onClick={() => scrollToSection('projects')} className="footer-nav-link">
                            Projects
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