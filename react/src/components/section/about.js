import React from "react";
import "./about.css";
import "../../index.css";
import WordSwitcher from "../WordSwitcher";

function AboutSection() {
    return (
        <section className="about-section" id="about">
            {/* Profile Photo */}
            <img
                src={require("../../img/1732601951208.jpg")}
                alt="Arindam Sharma Profile"
                className="profile-photo"
            />
            <div className="about-content">
                {/* Title and Subtitle */}
                <h1 className="about-title">Hello There👋</h1>
                <h2 className="about-subtitle">
                    I am <WordSwitcher words={[
                        "Software Engineer",
                        "Tech Innovator",
                        "Problem Solver"
                    ]} typeSpeed={40} interval={2000} />
                </h2>
                {/* Short Description */}
                <p className="about-short-desc">
                    Passionate about crafting seamless digital experiences with clean, efficient code. I thrive on solving complex problems, embracing new technologies, and turning ideas into impactful solutions.
                </p>
                {/* Hire Me Button */}
                <button className="about-hire-btn" onClick={() => document.getElementById('hire').scrollIntoView({behavior: 'smooth'})}>
                    Hire Me
                </button>
            </div>
        </section>
    );
}

export default AboutSection;
