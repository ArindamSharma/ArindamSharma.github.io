import React, { useState, useEffect, useRef } from 'react';
import './skills.css';
import { PERSONAL_INFO } from '../../constants';

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(3); // Start with AI/ML & Data Science as active
  const [visibleItems, setVisibleItems] = useState({});
  const skillsRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // Animate skill items on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            setVisibleItems((prev) => ({ ...prev, [itemId]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (index) => {
    if (scrollContainerRef.current) {
      const categoryWidth = 350 + 20; // category width + gap
      const scrollPosition = index * categoryWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
    setCurrentCategory(index);
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const categoryWidth = 350 + 20;
      const currentIndex = Math.round(container.scrollLeft / categoryWidth);
      setCurrentCategory(currentIndex);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="skills-section section" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-carousel-container">
          <div 
            className="skills-grid" 
            ref={scrollContainerRef}
            style={{ opacity: 1 }}
          >
            {PERSONAL_INFO.SKILLS.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`skill-category ${categoryIndex === currentCategory ? 'active' : ''}`}
                style={{
                  transform: 'none',
                  transition: 'transform 0.5s ease-in-out',
                  opacity: 1
                }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => {
                    const itemId = `${categoryIndex}-${skillIndex}`;
                    const isVisible = visibleItems[itemId];
                    
                    return (
                      <div 
                        key={skillIndex}
                        className="skill-item"
                        data-item-id={itemId}
                        style={{
                          opacity: isVisible ? 1 : 1,
                          transform: isVisible ? 'none' : 'none'
                        }}
                      >
                        <div className="skill-header">
                          <span className="skill-icon">
                            <img 
                              src={skill.icon} 
                              alt={skill.name} 
                              style={{ 
                                width: '16px', 
                                height: '16px',
                                filter: 'brightness(0) saturate(100%) invert(1)'
                              }} 
                            />
                          </span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.percentage}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="skills-pagination">
            {PERSONAL_INFO.SKILLS.map((_, index) => (
              <div
                key={index}
                className={`pagination-dot ${index === currentCategory ? 'active' : ''}`}
                onClick={() => scrollToCategory(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;