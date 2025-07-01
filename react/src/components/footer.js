import React from "react";
import "./footer.css";
import { PERSONAL_INFO } from "../constants";

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-columns">
                <div className="footer-column">
                    <h4 className="footer-column-title">Get In Touch</h4>
                    <div className="footer-contact-info">
                        <a href={`mailto:${PERSONAL_INFO.CONTACT_INFO.email}`} className="footer-contact-item">
                            <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>{PERSONAL_INFO.CONTACT_INFO.email}</span>
                        </a>
                        <a href={`tel:${PERSONAL_INFO.CONTACT_INFO.phone}`} className="footer-contact-item">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <span>{PERSONAL_INFO.CONTACT_INFO.phone}</span>
                        </a>
                        <div className="footer-contact-item">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span>{PERSONAL_INFO.CONTACT_INFO.location}</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-column">
                    <h4 className="footer-column-title">Follow Me</h4>
                    <div className="footer-social-links">
                        {PERSONAL_INFO.SOCIAL_LINKS.slice(0, 4).map((social, index) => (
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
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#experience">Experience</a>
                        <a href="#achievements">Achievements</a>
                        <a href="#contact">Contact</a>
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