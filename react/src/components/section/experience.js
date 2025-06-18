import React from "react";
import "./experience.css";

const EXPERIENCES = [
  {
    company: "Light & Wonder",
    title: "Sr. Associate Software Engineer | Associate Software Engineer",
    duration: "Nov 2022 – Present",
    details: [
      "Developed an interactive game page using Vanilla JavaScript, HTML, and CSS, designed to transition between games as a lightweight Bonus Screen.",
      "Upgraded OS bash scripts improving system performance and ensured compatibility with the latest operating systems.",
      "Collaborated on application development using C# Dot.NET framework, implementing features like multi-threaded communication and task automation across various machines.",
      "Created a Python-based standalone internal tool with a user-friendly GUI, aiming to reduce processing time and errors during analysis.",
      "Configured DHCP service to enable self-configuration upon boot-up, thereby enhancing network efficiency and reliability.",
      "Contributed to workflow optimization for jackpot redemption and subsequent development efforts."
    ]
  },
  {
    company: "KLA Tencor",
    title: "Software Engineer Intern",
    duration: "May 2023 – Aug 2023",
    details: [
      "Developed a Python-based Difference Report Generator, uses system configuration files and RTC client, allowing quick and easy tracking of configuration changes and associated with respective users.",
      "Developed a Calibration checker using C# and Windows Registry, ensuring the safety and reliability of system boot up and its delicate components."
    ]
  },
  {
    company: "IIITDM Kancheepuram",
    title: "Teaching Assistance (HTTA)",
    duration: "Oct 2021 – Mar 2022",
    details: [
      "Providing Concepts Insight and constant feedback, resulting in improved learning experiences.",
      "Supporting professors during lectures, labs, and tutorials."
    ]
  },
  {
    company: "Vassar Labs",
    title: "Software Engineer Intern",
    duration: "May 2021 – Nov 2021",
    details: [
      "Worked on API Developing/Modifying/Updating modules using Java Spring Boot Framework.",
      "Worked on improving the existing data extraction algorithm, resulting in enhanced performance in loading large data.",
      "TechStacks used: Java, Maven, REST API, Spring Boot, Cassandra, MySQL."
    ]
  },
  {
    company: "BITS College Durg",
    title: "Full Stack Developer | Intern",
    duration: "Nov 2018 – Dec 2018",
    details: [
      "Worked on developing multiple web pages for Hospital Management System Website using Python and Flask Framework along with JavaScript, Bootstrap, Ajax, and JSON."
    ]
  },
  {
    company: "IIITDM Kancheepuram",
    title: "Team Lead | Full Stack Development | Placement Website",
    duration: "Nov 2018 – Dec 2018",
    details: [
      "Collaborated with talented individuals, came up with a design for static website and developed, inclusive of all necessary placement information.",
      "TechStacks Used: JavaScript, HTML, CSS, Express.js, Node.js, Bootstrap.",
      "Ref: placements.iiitdm.ac.in."
    ]
  }
];

function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <div className="modern-experience-list">
        {EXPERIENCES.map((exp, idx) => (
          <div className="modern-experience-card" key={idx}>
            <div className="modern-experience-header">
              <img
                src={`https://source.unsplash.com/60x60/?company,office,${encodeURIComponent(exp.company)}`}
                alt={exp.company + ' logo'}
                className="modern-experience-logo"
              />
              <div className="modern-experience-meta">
                <h3 className="modern-experience-title">{exp.title}</h3>
                <span className="modern-experience-company">{exp.company}</span>
                <span className="modern-experience-duration">{exp.duration}</span>
              </div>
            </div>
            <ul className="modern-experience-details">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

// Experience section component placeholder
