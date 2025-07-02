import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectdetail.css";
import ImageRotator from "../components/ImageRotator";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
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
              <button onClick={() => navigate(-1)} className="back-btn">
                <span className="back-icon">←</span>
                <span className="back-text">Go Back</span>
              </button>
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
          <button onClick={() => navigate(-1)} className="back-btn">
            <span className="back-icon">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <div className="projectdetail-header">
            <h1 className="section-title">{project.title}</h1>
            {project.duration && (
              <div className="projectdetail-duration">{project.duration}</div>
            )}
          </div>
          
          {/* Rotating image component */}
          <div className="projectdetail-slider">
            <ImageRotator images={images} interval={1000} alt={project.title} />
          </div>
          
          {/* Description as paragraphs */}
          <div className="projectdetail-description">
            {project.description.map((d, i) => (
              <p key={i} className="projectdetail-desc-para">{d}</p>
            ))}
          </div>
          
          {/* Links as buttons */}
          <div className="projectdetail-links">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectdetail-link">
                <span className="link-icon">🔗</span>
                <span className="link-text">GitHub</span>
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projectdetail-link">
                <span className="link-icon">🚀</span>
                <span className="link-text">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
