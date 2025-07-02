import React from "react";
import { useLocation } from "react-router-dom";
import "./footer.css";
import { PERSONAL_INFO } from "../constants";

// Footer Component
function Footer() {
    const location = useLocation();
    
    // Check if we're on the main page or sub-pages
    const isMainPage = location.pathname === '/';

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
                            <a href="/" className="footer-nav-link">
                                Home
                            </a>
                        )}
                        <a href="/#about" className="footer-nav-link">
                            About
                        </a>
                        <a href="/#skills" className="footer-nav-link">
                            Skills
                        </a>
                        <a href="/projects" className="footer-nav-link">
                            Projects
                        </a>
                        <a href="/#experience" className="footer-nav-link">
                            Experience
                        </a>
                        <a href="/#achievements" className="footer-nav-link">
                            Achievements
                        </a>
                        <a href="/#hire" className="footer-nav-link">
                            Contact
                        </a>
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