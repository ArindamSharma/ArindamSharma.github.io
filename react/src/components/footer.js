import React from "react";
import "./footer.css";

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-columns">
                <div className="footer-column">
                    <h4 className="footer-column-title">Get In Touch</h4>
                    <div className="footer-contact-info">
                        <a href="mailto:arindamsharma1998@gmail.com" className="footer-contact-item">
                            <svg className="footer-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <span>arindamsharma1998@gmail.com</span>
                        </a>
                        <a href="tel:+91 12345 67890" className="footer-contact-item">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <span>+91 12345 67890</span>
                        </a>
                        <div className="footer-contact-item">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                            </svg>
                            <span>India</span>
                        </div>
                    </div>
                </div>
                
                <div className="footer-column">
                    <h4 className="footer-column-title">Follow Me</h4>
                    <div className="footer-social-links">
                        <a href="https://github.com/ArindamSharma" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                        <a href="https://linkedin.com/in/arindamsharma18" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://x.com/ArinDevStar" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                            <span>Twitter</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                            <svg className="footer-icon" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12.017 0C8.396 0 7.929.01 7.102.048 6.273.088 5.718.222 5.238.42a4.83 4.83 0 00-1.757 1.138A4.83 4.83 0 00.343 3.315c-.198.48-.332 1.035-.372 1.864C-.01 6.006 0 6.473 0 10.094v3.822c0 3.621.01 4.088.048 4.915.04.829.174 1.384.372 1.864.205.676.478 1.25 1.138 1.757a4.83 4.83 0 001.757 1.138c.48.198 1.035.332 1.864.372.827.04 1.294.048 4.915.048h3.822c3.621 0 4.088-.01 4.915-.048.829-.04 1.384-.174 1.864-.372a4.83 4.83 0 001.757-1.138 4.83 4.83 0 001.138-1.757c.198-.48.332-1.035.372-1.864.04-.827.048-1.294.048-4.915V10.094c0-3.621-.01-4.088-.048-4.915-.04-.829-.174-1.384-.372-1.864a4.83 4.83 0 00-1.138-1.757A4.83 4.83 0 0018.92.42c-.48-.198-1.035-.332-1.864-.372C16.229.01 15.762 0 12.141 0h-.124zM12.017 2.2c3.48 0 3.896.014 5.275.071.657.03 1.234.139 1.694.263.426.166.73.364 1.048.682.318.318.516.622.682 1.048.124.46.233 1.037.263 1.694.057 1.379.071 1.795.071 5.275s-.014 3.896-.071 5.275c-.03.657-.139 1.234-.263 1.694-.166.426-.364.73-.682 1.048-.318.318-.622.516-1.048.682-.46.124-1.037.233-1.694.263-1.379.057-1.795.071-5.275.071s-3.896-.014-5.275-.071c-.657-.03-1.234-.139-1.694-.263-.426-.166-.73-.364-1.048-.682a2.63 2.63 0 01-.682-1.048c-.124-.46-.233-1.037-.263-1.694-.057-1.379-.071-1.795-.071-5.275s.014-3.896.071-5.275c.03-.657.139-1.234.263-1.694.166-.426.364-.73.682-1.048.318-.318.622-.516 1.048-.682.46-.124 1.037-.233 1.694-.263 1.379-.057 1.795-.071 5.275-.071zm0 3.678a6.122 6.122 0 100 12.244 6.122 6.122 0 000-12.244zM12.017 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                            </svg>
                            <span>Instagram</span>
                        </a>
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
                <p>Arindam Sharma © {new Date().getFullYear()} | All rights reserved.</p>
                <div className="footer-status">
                    <span className="status-dot"></span>
                    <span>Available for freelance projects</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;