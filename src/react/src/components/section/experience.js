import React, { useState, useEffect, useRef, useCallback } from "react";
import "./experience.css";
import { PERSONAL_INFO } from "../../constants";

const ExperienceSection = () => {
  const [currentExperience, setCurrentExperience] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const scrollContainerRef = useRef(null);

  // Function to generate company initials
  const getCompanyInitials = (companyName) => {
    return companyName
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2); // Limit to 2 characters
  };

  // Function to limit number of details shown
  const getVisibleDetails = (details, isExpanded, maxItems = 2) => {
    if (isExpanded || details.length <= maxItems) {
      return details;
    }
    return details.slice(0, maxItems);
  };

  // Function to toggle card expansion
  const toggleCardExpansion = (index, event) => {
    event.stopPropagation(); // Prevent card click handler from firing
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Function to collapse card when focus changes
  const handleCardFocusChange = () => {
    if (expandedCard !== null) {
      setExpandedCard(null);
    }
  };

  // Use experiences data directly from constants
  const experiences = PERSONAL_INFO.EXPERIENCES.map((exp, index) => ({
    company: exp.company,
    title: exp.role,
    duration: exp.period,
    location: exp.location || "Remote", // Use location from constants or default
    type: exp.type || "Full-time", // Use type from constants or default
    companyLogo: exp.companyLogo, // Add company logo URL
    companyInitials: getCompanyInitials(exp.company), // Generate initials
    details: exp.highlights,
    technologies: exp.skills || ["JavaScript", "React", "TypeScript"] // Use skills from constants
  }));

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 520; // card width + gap
      const currentIndex = Math.round(container.scrollLeft / cardWidth);
      if (currentIndex !== currentExperience) {
        setCurrentExperience(currentIndex);
      }
    }
  }, [currentExperience]);

  // Optimized scroll to experience function
  const scrollToExperience = useCallback((index) => {
    if (scrollContainerRef.current && index !== currentExperience) {
      const cardWidth = 520;
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentExperience(index);
    }
  }, [currentExperience]);

  // Scroll event listener setup
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Throttle scroll events for better performance
      let ticking = false;
      const throttledHandleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      };

      container.addEventListener('scroll', throttledHandleScroll, { passive: true });
      return () => container.removeEventListener('scroll', throttledHandleScroll);
    }
  }, [handleScroll]);

  // Handle clicks outside expanded card to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (expandedCard !== null) {
        const expandedCardElement = document.querySelector('.experience-card.expanded');
        if (expandedCardElement && !expandedCardElement.contains(event.target)) {
          setExpandedCard(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [expandedCard]);

  // Handle scroll to close expanded card
  useEffect(() => {
    if (expandedCard !== null) {
      setExpandedCard(null);
    }
  }, [currentExperience]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="experience-section section" id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-description">
          A journey through innovative companies and challenging projects, where I've contributed to cutting-edge software solutions, 
          collaborated with talented teams, and continuously grown as a developer.
        </p>
        
        <div className="experience-carousel-container">
          <div 
            className="experience-grid" 
            ref={scrollContainerRef}
          >
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`experience-card ${expandedCard === index ? 'expanded' : ''}`}
                onClick={(e) => {
                  // Close expanded card if clicking outside the button
                  if (expandedCard !== null && !e.target.closest('.more-details-btn')) {
                    setExpandedCard(null);
                  }
                }}
              >                
                <div className="experience-content">
                  <div className="experience-header">
                    <div className="experience-main">
                      <h3 className="experience-title">{exp.title}</h3>
                      <div className="experience-company">
                        {exp.companyLogo && (
                          <img 
                            src={exp.companyLogo} 
                            alt={`${exp.company} logo`}
                            className="company-logo-img"
                            onError={(e) => {
                              // Show fallback initials logo if image fails
                              e.target.outerHTML = `<div class="company-logo-fallback">${exp.companyInitials}</div>`;
                            }}
                          />
                        )}
                        {!exp.companyLogo && (
                          <div className="company-logo-fallback">{exp.companyInitials}</div>
                        )}
                        <h4 className="company-name">{exp.company}</h4>
                      </div>
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
                      {getVisibleDetails(exp.details, expandedCard === index).map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="detail-item"
                        >
                          {detail}
                        </li>
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

                  {/* Separator and More/Less Button - Only show if more than 2 details */}
                  {exp.details.length > 2 && (
                    <div className="experience-bottom">
                      <div className="experience-separator"></div>
                      <div className="experience-actions">
                        <button 
                          className="more-details-btn"
                          onClick={(e) => toggleCardExpansion(index, e)}
                          onBlur={handleCardFocusChange}
                        >
                          {expandedCard === index ? 'View Less' : 'View More'}
                          <span className="btn-icon">
                            {expandedCard === index ? '↑' : '↓'}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="experience-pagination">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`pagination-dot ${index === currentExperience ? 'active' : ''}`}
                onClick={() => scrollToExperience(index)}
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
