import React, { useState, useEffect, useRef } from 'react';
import './skills.css';

const Skills = () => {
  const [currentCategory, setCurrentCategory] = useState(3); // Start with AI/ML & Data Science as active
  const [visibleItems, setVisibleItems] = useState({});
  const skillsRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", percentage: 95, icon: "🐍" },
        { name: "C++", percentage: 88, icon: "⚡" },
        { name: "C", percentage: 85, icon: "🔧" },
        { name: "C#", percentage: 80, icon: "💎" },
        { name: "Java", percentage: 80, icon: "☕" },
        { name: "Shell Scripting", percentage: 82, icon: "🖥️" },
        { name: "Verilog", percentage: 75, icon: "🔌" }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", percentage: 95, icon: "🌐" },
        { name: "JavaScript", percentage: 90, icon: "⚡" },
        { name: "Angular", percentage: 85, icon: "🅰️" },
        { name: "React", percentage: 92, icon: "⚛️" },
        { name: "Node.js", percentage: 88, icon: "🟢" },
        { name: "Express.js", percentage: 90, icon: "🚀" },
        { name: "Flask", percentage: 92, icon: "🌶️" }
      ]
    },
    {
      title: "DataBases",
      skills: [
        { name: "MySQL", percentage: 88, icon: "🗄️" },
        { name: "MariaDB", percentage: 85, icon: "🐬" },
        { name: "Cassandra", percentage: 85, icon: "📊" },
        { name: "MongoDB", percentage: 85, icon: "🍃" },
        { name: "PostgreSQL", percentage: 82, icon: "🐘" },
        { name: "Redis", percentage: 75, icon: "🔴" },
        { name: "GraphQL", percentage: 78, icon: "📈" }
      ]
    },
    {
      title: "AI/ML & Data Science",
      skills: [
        { name: "Neural Networks", percentage: 90, icon: "🧠" },
        { name: "OpenCV", percentage: 88, icon: "👁️" },
        { name: "YOLO", percentage: 85, icon: "🎯" },
        { name: "Machine Learning", percentage: 87, icon: "🤖" },
        { name: "Genetic Algorithms", percentage: 92, icon: "🧬" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", percentage: 95, icon: "🐙" },
        { name: "Docker", percentage: 80, icon: "🐳" },
        { name: "Linux", percentage: 90, icon: "🐧" },
        { name: "Arduino", percentage: 85, icon: "🔧" },
        { name: "Figma", percentage: 82, icon: "🎨" },
        { name: "Adobe XD", percentage: 80, icon: "🎨" }
      ]
    },
    {
      title: "Software Engineering",
      skills: [
        { name: "Data Structures", percentage: 95, icon: "🏗️" },
        { name: "Algorithms", percentage: 93, icon: "⚙️" },
        { name: "SocketProgramming", percentage: 88, icon: "🔌" },
        { name: "Multi-threading", percentage: 87, icon: "🔄" },
        { name: "Object-Oriented Programming", percentage: 95, icon: "📦" },
        { name: "Software Design Patterns", percentage: 88, icon: "🏛️" },
        { name: "System Architecture", percentage: 85, icon: "🏗️" },
        { name: "API Design", percentage: 90, icon: "🔗" },
        { name: "Database Design", percentage: 88, icon: "🗄️" }
      ]
    }
  ];

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
            {skillCategories.map((category, categoryIndex) => (
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
                            <span style={{ fontSize: '16px' }}>{skill.icon}</span>
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
            {skillCategories.map((_, index) => (
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