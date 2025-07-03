import React from "react";
import "./achievements.css";
import { PERSONAL_INFO } from "../../constants";

function AchievementsSection() {
  const getIconSvg = (iconType) => {
    switch (iconType) {
      case 'trophy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <path d="M7 4V2c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2h5v3c0 2.21-1.79 4-4 4h-1.06c-.67 3.75-3.88 6.64-7.94 6.64S4.73 14.75 4.06 11H3c-2.21 0-4-1.79-4-4V4h5zM9 2v2h6V2H9zM2 6v1c0 1.1.9 2 2 2h1.56c.38 1.45 1.35 2.7 2.69 3.54-.4-.64-.62-1.4-.62-2.21C7.63 8.78 9.41 7 11.96 7s4.33 1.78 4.33 4.33c0 .81-.22 1.57-.62 2.21 1.34-.84 2.31-2.09 2.69-3.54H20c1.1 0 2-.9 2-2V6H2zM12 22l1.78-5H9.22L11 22h1z"/>
          </svg>
        );
      case 'medal':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
          </svg>
        );
      case 'award':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm1-9h-2v4h2V9zm0 6h-2v2h2v-2z"/>
          </svg>
        );
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <polyline points="16,18 22,12 16,6"/>
            <polyline points="8,6 2,12 8,18"/>
          </svg>
        );
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
      case 'lightbulb':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/>
            <path d="M16 3.13a4 4 0 010 7.75"/>
          </svg>
        );
      case 'stack':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <polyline points="16,18 22,12 16,6"/>
            <polyline points="8,6 2,12 8,18"/>
          </svg>
        );
      case 'brain':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <circle cx="12" cy="8" r="7"/>
            <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"/>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{width: '24px', height: '24px', filter: 'invert(1)'}}>
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        );
    }
  };

  return (
    <section className="achievements-section section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements & Recognition</h2>
        <p className="achievements-section-description">
          {PERSONAL_INFO.SECTION_DESCRIPTIONS.achievements}
        </p>
        
        <div className="stats-grid">
          {PERSONAL_INFO.ACHIEVEMENT_STATS.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="achievements-grid">
          {PERSONAL_INFO.ACHIEVEMENTS.map((achievement, index) => (
            <div className="achievement-card" key={achievement.id}>
              <div className="achievement-icon" style={{backgroundColor: achievement.iconColor}}>
                {getIconSvg(achievement.icon)}
              </div>
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-year">{achievement.year}</span>
                </div>
                <p className="achievement-description">
                  {achievement.description}
                </p>
                <div className="achievement-category">
                  <span className="category-tag">{achievement.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsSection;