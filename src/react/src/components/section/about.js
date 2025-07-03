import React from "react";
import "./about.css";
import "../../index.css";
import WordSwitcher from "../WordSwitcher";
import { PERSONAL_INFO } from "../../constants";

function AboutSection() {
    return (
        <section className="about-section section" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-left">
                        <h1 className="about-title">Hello There! 👋</h1>
                        <h2 className="about-subtitle">
                            I'm <span className="name-highlight">{PERSONAL_INFO.name}</span>
                        </h2>
                        <div className="typing-container">
                            <WordSwitcher 
                                words={PERSONAL_INFO.title} 
                                typeSpeed={40} 
                                interval={2000}
                                className="typing-text"
                            />
                        </div>
                        <p className="about-description">
                            {PERSONAL_INFO.about}
                        </p>
                        <div className="about-buttons">
                            <a 
                                href="/#hire"
                                className="btn-primary hire-btn"
                            >
                                Let's Work Together
                            </a>
                            <a 
                                href={PERSONAL_INFO.resumeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                download="Arindam_Sharma_Resume.pdf"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16" style={{marginRight: '8px'}}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17"/>
                                </svg>
                                Download CV
                            </a>
                        </div>
                        <div className="social-links">
                            {PERSONAL_INFO.SOCIAL_LINKS.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="social-link" 
                                    title={social.name}
                                >
                                    <img src={social.icon} alt={social.name} width="24" height="24" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="about-right">
                        <div className="profile-container">
                            <div className="profile-background"></div>
                            <img
                                src={PERSONAL_INFO.profileImage}
                                alt="Arindam Sharma Profile"
                                className="profile-photo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
