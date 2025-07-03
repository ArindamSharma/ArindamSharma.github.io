import React from 'react';
import './education.css';
import { PERSONAL_INFO } from '../../constants';

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">Academic Background & Qualifications</p>
        </div>

        <div className="education-list">
          {PERSONAL_INFO.EDUCATION.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <div className="education-logo">
                  <img src={edu.logo} alt={edu.institution} />
                </div>
                <div className="education-info">
                  <h3 className="institution-name">{edu.institution}</h3>
                  <h4 className="degree-title">{edu.degree}</h4>
                  <div className="education-meta">
                    <span className="period">{edu.period}</span>
                    <span className="location">{edu.location}</span>
                  </div>
                  <div className="grade">{edu.grade}</div>
                </div>
              </div>

              <div className="education-details">
                <h5>Key Highlights:</h5>
                <ul className="highlights-list">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
