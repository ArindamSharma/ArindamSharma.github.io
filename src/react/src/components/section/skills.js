import React, { useState, useEffect, useRef, useMemo } from 'react';
import './skills.css';
import { PERSONAL_INFO } from '../../constants';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [visibleSkills, setVisibleSkills] = useState(new Set());
  const skillsRef = useRef(null);

  // Memoized skill calculation with dynamic proficiency levels
  const skillsData = useMemo(() => {
    const totalItems = PERSONAL_INFO.PROJECTS.length ;
    
    if (totalItems === 0) return PERSONAL_INFO.SKILLS;
    
    const skillCounts = new Map();
    
    const normalizeSkillName = (skillName) => {
      return skillName.toLowerCase().trim();
    };
    
    // Count skill usage across projects and experiences
    [...PERSONAL_INFO.PROJECTS, ...PERSONAL_INFO.EXPERIENCES].forEach(item => {
      if (item.skills) {
        item.skills.forEach(skill => {
          const normalizedSkill = normalizeSkillName(skill.name);
          skillCounts.set(normalizedSkill, (skillCounts.get(normalizedSkill) || 0) + 1);
        });
      }
    });
    
    return PERSONAL_INFO.SKILLS.map(category => ({
      ...category,
      skills: category.skills.map(skill => {
        const normalizedSkillName = normalizeSkillName(skill.name);
        let count = skillCounts.get(normalizedSkillName) || 0;
        
        // Fuzzy matching for partial skill name matches
        if (count === 0) {
          for (const [projectSkill, skillCount] of skillCounts) {
            if (projectSkill.includes(normalizedSkillName) || normalizedSkillName.includes(projectSkill)) {
              count += skillCount;
            }
          }
        }
        return {
          ...skill,
          count
        };
      }).sort((a, b) => b.count - a.count) // Sort by usage count
    }));
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId;
            if (skillId) {
              setVisibleSkills(prev => new Set([...prev, skillId]));
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    const timeoutId = setTimeout(() => {
      const skillElements = document.querySelectorAll('.modern-skill-item');
      skillElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [skillsData]);

  return (
    <section className="skills-section section" id="skills" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">{PERSONAL_INFO.SECTION_DESCRIPTIONS.skills}</p>
        
        {/* Category Navigation */}
        <div className="skills-nav">
          {skillsData.map((category, index) => (
            <button
              key={category.title}
              className={`skills-nav-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => setActiveCategory(index)}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="modern-skills-container">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`skills-category-modern ${activeCategory === categoryIndex ? 'active' : ''}`}
              style={{ display: activeCategory === categoryIndex ? 'block' : 'none' }}
            >
              <div className="modern-skills-grid">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${categoryIndex}-${skillIndex}`;
                  const isVisible = visibleSkills.has(skillId);
                  const isHovered = hoveredSkill === skillId;
                  
                  return (
                    <div
                      key={skill.name}
                      className={`modern-skill-item ${isVisible ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
                      data-skill-id={skillId}
                      onMouseEnter={() => setHoveredSkill(skillId)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className="skill-card">
                        <div className="skill-header">
                          <div className="skill-icon-wrapper">
                            <img 
                              src={skill.icon} 
                              alt={skill.name}
                              className="skill-icon"
                              loading="lazy"
                            />
                          </div>
                          <div className="skill-info">
                            <h4 className="skill-name">{skill.name}</h4>
                            <div className="skill-usage-badge">
                              {skill.count > 0 ? (
                                <span className="usage-count">
                                  Used in {skill.count} project{skill.count !== 1 ? 's' : ''}
                                </span>
                              ) : (
                                <span className="no-usage">Available skill</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {/* Glow effect on hover */}
                        <div className="skill-glow" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
