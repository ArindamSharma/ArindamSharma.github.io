import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectdetail.css";
import ImageRotator from "../components/ImageRotator";

function ProjectDetail({ projectId,navigateToHome, navigateToProjects ,navigateToProject}) {
  const project = PERSONAL_INFO.PROJECTS[parseInt(projectId, 10)];

  if (!project) {
    return (
      <div className="projectdetail-container">
        <Navbar />
        <section className="projectdetail-section">
          <div className="container">
            <div className="projectdetail-not-found">
              <h2 className="section-title">Project Not Found</h2>
              <p className="section-description">The project you're looking for doesn't exist.</p>
              <button onClick={navigateToProjects} className="projectdetail-back-btn">
                <span className="projectdetail-back-icon">←</span>
                <span className="back-text">Go Back</span>
              </button>
            </div>
          </div>
        </section>
      <Footer navigateToProjects={navigateToProjects} navigateToHome={navigateToHome} navigateToProject={navigateToProject} />
      </div>
    );
  }

  // Placeholder images for rotator (replace with real images if available)
  const images = project.images || [
    '', '', '' // Add empty images for now
  ];

  return (
    <div className="projectdetail-container">
      <Navbar />
      <section className="projectdetail-section" id="projectdetail">
        <div className="container">
          {/* Back Button */}
          <button onClick={navigateToProjects} className="projectdetail-back-btn">
            <span className="projectdetail-back-icon">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <div className="projectdetail-header">
            <h1 className="section-title">{project.title}</h1>
            {/* {project.duration && (
              <div className="projectdetail-duration">{project.duration}</div>
            )} */}
          </div>
          
          {/* Hero Image with Overlay Stats */}
          <div className="projectdetail-hero">
            <div className="projectdetail-image-container">
              <ImageRotator images={images} interval={5000} alt={project.title} />
            </div>
            <div className="projectdetail-hero-overlay">
              <div className="projectdetail-quick-stats">
                <div className="projectdetail-stat">
                  <span className="projectdetail-stat-label">Skills & Tech</span>
                  <span className="projectdetail-stat-value">{project.skills ? project.skills.length : 0}</span>
                </div>
                {project.duration && (
                  <div className="projectdetail-stat">
                    <span className="projectdetail-stat-label">Duration</span>
                    <span className="projectdetail-stat-value">{project.duration}</span>
                  </div>
                )}
                {project.links && project.links.length > 0 && (
                  <div className="projectdetail-stat">
                    <span className="projectdetail-stat-label">Links</span>
                    <span className="projectdetail-stat-value">{project.links.length}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className="projectdetail-content">
            {/* Main Content */}
            <div className="projectdetail-main">
              {/* Project Overview */}
              <div className="projectdetail-overview">
                <h3 className="projectdetail-overview-title">
                  <span className="projectdetail-overview-icon"></span>
                  Project Overview
                </h3>
                <div className="projectdetail-description">
                  {project.description.map((d, i) => (
                    <p key={i} className="projectdetail-desc-para">{d}</p>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="projectdetail-sidebar">
              {/* Skills Section */}
              {project.skills && project.skills.length > 0 && (
                <div className="projectdetail-skills-section">
                  <h3 className="projectdetail-skills-title">Technologies & Skills</h3>
                  <div className="projectdetail-skills">
                    {project.skills.map((skill, index) => (
                      <span key={index} className="projectdetail-skill-tag">
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Action Links */}
              {project.links && project.links.length > 0 && (
                <div className="projectdetail-actions">
                  <h3 className="projectdetail-actions-title">Project Links</h3>
                  <div className="projectdetail-links">
                    {project.links.map((linkObj, index) => (
                      <a key={index} href={linkObj.link} target="_blank" rel="noopener noreferrer" className="projectdetail-link">
                        <span className="link-icon">
                          {linkObj.name.toLowerCase().includes('github') ? '🔗' :
                           linkObj.name.toLowerCase().includes('figma') ? '🎨' :
                           linkObj.name.toLowerCase().includes('demo') ? '🚀' :
                           linkObj.name.toLowerCase().includes('website') ? '🌐' : '🔗'}
                        </span>
                        <span className="link-text">{linkObj.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer navigateToProjects={navigateToProjects} navigateToProject={navigateToProject} navigateToHome={navigateToHome} />
    </div>
  );
}

export default ProjectDetail;
