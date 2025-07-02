import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectdetail.css";
import ImageRotator from "../components/ImageRotator";

function ProjectDetail() {
  const { id } = useParams();
  const project = PERSONAL_INFO.PROJECTS[parseInt(id, 10)];

  if (!project) {
    return (
      <div className="projectdetail-container">
        <Navbar />
        <section className="projectdetail-section">
          <div className="container">
            <div className="projectdetail-not-found">
              <h2 className="section-title">Project Not Found</h2>
              <p className="section-description">The project you're looking for doesn't exist.</p>
              <a href="/projects" className="back-btn">
                <span className="back-icon">←</span>
                <span className="back-text">Go Back</span>
              </a>
            </div>
          </div>
        </section>
        <Footer />
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
      <section className="projectdetail-section" id="project-detail">
        <div className="container">
          {/* Back Button */}
          <a href="/projects" className="back-btn">
            <span className="back-icon">←</span>
            <span className="back-text">Back</span>
          </a>
          
          <div className="projectdetail-header">
            <h1 className="section-title">{project.title}</h1>
            {project.duration && (
              <div className="projectdetail-duration">{project.duration}</div>
            )}
          </div>
          
          {/* Fixed 16:9 aspect ratio image slider */}
          <div className="projectdetail-slider">
            <div className="projectdetail-image-container">
              <ImageRotator images={images} interval={3000} alt={project.title} />
            </div>
          </div>
          
          {/* Project Information Grid */}
          <div className="projectdetail-info">
            {/* Skills Section */}
            {project.skills && project.skills.length > 0 && (
              <div className="projectdetail-section-card glass-card">
                <h3 className="projectdetail-section-title">Technologies & Skills</h3>
                <div className="projectdetail-skills">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="projectdetail-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Description Section */}
            <div className="projectdetail-section-card glass-card">
              <h3 className="projectdetail-section-title">Project Overview</h3>
              <div className="projectdetail-description">
                {project.description.map((d, i) => (
                  <p key={i} className="projectdetail-desc-para">{d}</p>
                ))}
              </div>
            </div>
            
            {/* Links Section */}
            {project.links && project.links.length > 0 && (
              <div className="projectdetail-section-card glass-card">
                <h3 className="projectdetail-section-title">Project Links</h3>
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
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
