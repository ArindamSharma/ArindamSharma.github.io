import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMailBulk, FaGithub, FaDiscord } from "react-icons/fa";
import "./footer.css";

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content-columns">
                <div className="footer-left">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <FaFacebook size={22} />
                    </a>
                    <a href="https://x.com/ArinDevStar" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter size={22} />
                    </a>
                    <a href="https://linkedin.com/in/arindamsharma18" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={22} />
                    </a>
                    <a href="mailto:arindamsharma1998@gmail.com" aria-label="Email">
                        <FaMailBulk size={22}/>
                    </a>
                    <a href="https://github.com/ArindamSharma" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub size={22} />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord">
                        <FaDiscord size={22} />
                    </a>
                </div>
                <div className="footer-right">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#hire">Hire Me</a>
                    <a href="/projects">All Projects</a>
                </div>
            </div>
            <div className="footer-copyright">
                Arindam Sharma &copy; {new Date().getFullYear()} | All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;