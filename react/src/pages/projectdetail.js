// Project Detail Page
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PROJECTS } from "../constants";
import "./home.css";
import ImageRotator from "../components/ImageRotator";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS[parseInt(id, 10)];

  if (!project) {
    return (
      <div className="container">
        <Navbar />
        <section className="projects-section">
          <h2>Project Not Found</h2>
          <button onClick={() => navigate(-1)} className="about-hire-btn">Go Back</button>
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
    <div className="container">
      <Navbar />
      <section className="projectdetail-section" id="project-detail">
        {/* Back Button */}
        <button onClick={() => navigate(-1)} className="projectdetail-back-btn about-hire-btn">
          ← Back
        </button>
        <h2 className="projectdetail-title">{project.title}</h2>
        {/* Rotating image component */}
        <div className="projectdetail-slider">
          <ImageRotator images={images} interval={1000} alt={project.title} />
        </div>
        {/* Description as paragraphs */}
        <div className="projectdetail-description">
          {project.description.map((d, i) => <p key={i} className="projectdetail-desc-para">{d}</p>)}
        </div>
        {/* Links as buttons */}
        <div className="projectdetail-links">
          {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="projectdetail-link projectdetail-btn">GitHub</a>}
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="projectdetail-link projectdetail-btn">Live Demo</a>}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
