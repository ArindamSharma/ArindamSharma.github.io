import React, { useState, useEffect } from "react";
import "./experience.css";

const ExperienceSection = () => {
  const [currentExperience, setCurrentExperience] = useState(3); // Start with Vassar Labs as active
  const [isAnimating, setIsAnimating] = useState(false);

  const experiences = [
    {
      company: "Light & Wonder",
      title: "Sr. Associate Software Engineer | Associate Software Engineer",
      duration: "Nov 2022 – Present",
      location: "Remote",
      type: "Full-time",
      logo: "🎮",
      details: [
        "Developed interactive game pages using Vanilla JavaScript, HTML, and CSS for lightweight Bonus Screen transitions",
        "Upgraded OS bash scripts improving system performance and compatibility with latest operating systems",
        "Built applications using C# .NET framework with multi-threaded communication and task automation",
        "Created Python-based internal tools with user-friendly GUI, reducing processing time and errors",
        "Configured DHCP services for enhanced network efficiency and reliability",
        "Optimized workflows for jackpot redemption and development processes"
      ],
      technologies: ["JavaScript", "C#", ".NET", "Python", "HTML/CSS", "Bash"]
    },
    {
      company: "KLA Tencor",
      title: "Software Engineer Intern",
      duration: "May 2023 – Aug 2023",
      location: "Chennai, India",
      type: "Internship",
      logo: "🔬",
      details: [
        "Developed Python-based Difference Report Generator using system configuration files and RTC client",
        "Created Calibration checker using C# and Windows Registry for system safety and reliability",
        "Implemented tracking systems for configuration changes with user association"
      ],
      technologies: ["Python", "C#", "Windows Registry", "RTC"]
    },
    {
      company: "IIITDM Kancheepuram",
      title: "Teaching Assistant (HTTA)",
      duration: "Oct 2021 – Mar 2022",
      location: "Chennai, India",
      type: "Part-time",
      logo: "🎓",
      details: [
        "Provided concept insights and constant feedback, improving learning experiences",
        "Supported professors during lectures, labs, and tutorials",
        "Mentored students in programming concepts and project development"
      ],
      technologies: ["Teaching", "Mentoring", "Academic Support"]
    },
    {
      company: "Vassar Labs",
      title: "Software Engineer Intern",
      duration: "May 2021 – Nov 2021",
      location: "Remote",
      type: "Internship",
      logo: "💻",
      details: [
        "Developed and modified API modules using Java Spring Boot Framework",
        "Improved data extraction algorithms for enhanced performance with large datasets",
        "Worked with distributed database systems and REST API development"
      ],
      technologies: ["Java", "Spring Boot", "Maven", "REST API", "Cassandra", "MySQL"]
    },
    {
      company: "BITS College Durg",
      title: "Full Stack Developer Intern",
      duration: "Nov 2018 – Dec 2018",
      location: "Durg, India",
      type: "Internship",
      logo: "🌐",
      details: [
        "Developed full-stack web applications using modern technologies",
        "Implemented responsive user interfaces and backend API integrations",
        "Collaborated with team on agile development practices"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    }
  ];

  const nextExperience = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const prevExperience = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const goToExperience = (index) => {
    if (isAnimating || index === currentExperience) return;
    setIsAnimating(true);
    setCurrentExperience(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const getItemClass = (index) => {
    if (index === currentExperience) return "active";
    return "slide-out-left";
  };

  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="experience-carousel-container">
          <button 
            className="carousel-nav carousel-nav-prev" 
            onClick={prevExperience}
            aria-label="Previous experience"
          >
            <img 
              alt="previous" 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E" 
              style={{ width: '20px', height: '20px' }}
            />
          </button>

          <button 
            className="carousel-nav carousel-nav-next" 
            onClick={nextExperience}
            aria-label="Next experience"
          >
            <img 
              alt="next" 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z'/%3E%3C/svg%3E" 
              style={{ width: '20px', height: '20px', transform: 'rotate(180deg)' }}
            />
          </button>

          <div className="experience-carousel" style={{ opacity: 1 }}>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-item ${getItemClass(index)}`}
                style={{
                  cursor: 'default',
                  pointerEvents: 'auto',
                  opacity: 1,
                  transform: 'none'
                }}
              >
                <div className="experience-card">
                  <div className="experience-icon">
                    <span className="company-logo">{exp.logo}</span>
                  </div>
                  
                  <div className="experience-content">
                    <div className="experience-header">
                      <div className="experience-main">
                        <h3 className="experience-title">{exp.title}</h3>
                        <h4 className="experience-company">{exp.company}</h4>
                      </div>
                      
                      <div className="experience-meta">
                        <div className="experience-duration">
                          <img 
                            alt="calendar" 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'/%3E%3Cline x1='16' y1='2' x2='16' y2='6'/%3E%3Cline x1='8' y1='2' x2='8' y2='6'/%3E%3Cline x1='3' y1='10' x2='21' y2='10'/%3E%3C/svg%3E" 
                            style={{ width: '16px', height: '16px', marginRight: '8px' }}
                          />
                          {exp.duration}
                        </div>
                        
                        <div className="experience-location">
                          <img 
                            alt="location" 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z'/%3E%3C/svg%3E" 
                            style={{ width: '16px', height: '16px', marginRight: '8px' }}
                          />
                          {exp.location}
                        </div>
                        
                        <div className="experience-type">
                          <img 
                            alt="briefcase" 
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='currentColor' viewBox='0 0 24 24'%3E%3Crect x='2' y='7' width='20' height='14' rx='2' ry='2'/%3E%3Cpath d='M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'/%3E%3C/svg%3E" 
                            style={{ width: '16px', height: '16px', marginRight: '8px' }}
                          />
                          {exp.type}
                        </div>
                      </div>
                    </div>
                    
                    <div className="experience-details">
                      <ul className="details-list">
                        {exp.details.map((detail, idx) => (
                          <li key={idx} className="detail-item">{detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="experience-technologies">
                      <h5 className="tech-title">Technologies:</h5>
                      <div className="tech-tags">
                        {exp.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-pagination">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentExperience ? 'active' : ''}`}
                onClick={() => goToExperience(index)}
                aria-label={`Go to experience ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
