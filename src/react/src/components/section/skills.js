import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import './skills.css';
import { PERSONAL_INFO } from '../../constants';

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [visibleItems, setVisibleItems] = useState({});
  const skillsRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const observerRef = useRef(null);

  // Memoized skill calculation to prevent recalculation on every render
  const skillsData = useMemo(() => {
    const totalItems = PERSONAL_INFO.PROJECTS.length + PERSONAL_INFO.EXPERIENCES.length;
    
    if (totalItems === 0) return PERSONAL_INFO.SKILLS;
    
    // Create a map to count skill occurrences
    const skillCounts = new Map();
    
    // Helper function to normalize skill names for better matching
    const normalizeSkillName = (skillName) => {
      return skillName.toLowerCase()
        .trim();
    };
    
    // Count skills efficiently using a single loop
    [...PERSONAL_INFO.PROJECTS, ...PERSONAL_INFO.EXPERIENCES].forEach(item => {
      if (item.skills) {
        item.skills.forEach(skill => {
          const normalizedSkill = normalizeSkillName(skill.name);
          skillCounts.set(normalizedSkill, (skillCounts.get(normalizedSkill) || 0) + 1);
        });
      }
    });
    
    // Calculate percentages for each skill category
    return PERSONAL_INFO.SKILLS.map(category => ({
      ...category,
      skills: category.skills.map(skill => {
        const normalizedSkillName = normalizeSkillName(skill.name);
        
        // Try exact match first
        let count = skillCounts.get(normalizedSkillName) || 0;
        
        // If no exact match, try partial matching
        if (count === 0) {
          for (const [projectSkill, skillCount] of skillCounts) {
            if (projectSkill.includes(normalizedSkillName) || normalizedSkillName.includes(projectSkill)) {
              count += skillCount;
            }
          }
        }
        
        const percentage = Math.round((count / totalItems) * 100);
        
        return {
          ...skill,
          percentage,
          count
        };
      })
    }));
  }, []); // Empty dependency array since PERSONAL_INFO is static

  // Optimized scroll handler with useCallback
  const handleScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const categoryWidth = 370; // category width + gap
      const currentIndex = Math.round(container.scrollLeft / categoryWidth);
      if (currentIndex !== currentCategory) {
        setCurrentCategory(currentIndex);
      }
    }
  }, [currentCategory]);

  // Optimized scroll to category function
  const scrollToCategory = useCallback((index) => {
    if (scrollContainerRef.current && index !== currentCategory) {
      const categoryWidth = 370;
      const scrollPosition = index * categoryWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentCategory(index);
    }
  }, [currentCategory]);

  // Optimized intersection observer setup
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const newVisibleItems = {};
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            if (itemId) {
              newVisibleItems[itemId] = true;
            }
          }
        });
        
        if (Object.keys(newVisibleItems).length > 0) {
          setVisibleItems(prev => ({ ...prev, ...newVisibleItems }));
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '50px'
      }
    );

    // Observe skill items after a brief delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const skillItems = document.querySelectorAll('.skill-item');
      skillItems.forEach((item) => observerRef.current?.observe(item));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [skillsData]);

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

  // Memoized skill item component to prevent unnecessary re-renders
  const SkillItem = React.memo(({ skill, itemId, isVisible }) => (
    <div 
      className="skill-item"
      data-item-id={itemId}
      style={{
        opacity: isVisible ? 1 : 0.8,
        transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'opacity 0.3s ease, transform 0.3s ease'
      }}
    >
      <div className="skill-header">
        <span className="skill-icon">
          <img 
            src={skill.icon} 
            alt={skill.name} 
            width="16"
            height="16"
            loading="lazy"
            style={{ 
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
          style={{ 
            width: `${skill.percentage}%`,
            transition: 'width 1s ease-in-out'
          }}
        />
      </div>
    </div>
  ));

  // Memoized category component
  const SkillCategory = React.memo(({ category, categoryIndex, isActive }) => (
    <div 
      className={`skill-category ${isActive ? 'active' : ''}`}
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
            <SkillItem
              key={`${skill.name}-${skillIndex}`}
              skill={skill}
              itemId={itemId}
              isVisible={isVisible}
            />
          );
        })}
      </div>
    </div>
  ));

  return (
    <section className="skills-section section" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">{PERSONAL_INFO.SECTION_DESCRIPTIONS.skills}</p>
        
        <div className="skills-carousel-container">
          <div 
            className="skills-grid" 
            ref={scrollContainerRef}
            style={{ opacity: 1 }}
          >
            {skillsData.map((category, categoryIndex) => (
              <SkillCategory
                key={`${category.title}-${categoryIndex}`}
                category={category}
                categoryIndex={categoryIndex}
                isActive={categoryIndex === currentCategory}
              />
            ))}
          </div>

          <div className="skills-pagination">
            {skillsData.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`pagination-dot ${index === currentCategory ? 'active' : ''}`}
                onClick={() => scrollToCategory(index)}
                aria-label={`Go to ${skillsData[index]?.title || 'category'} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;