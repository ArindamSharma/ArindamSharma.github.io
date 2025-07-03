import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectslist.css";
import ProjectCard from "../components/ProjectCard";

function ProjectsList({ navigateToHome, navigateToProject }) {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="projects-list-container">
      <Navbar />
      <section className="projects-list-section" id="projects-list">
        <div className="container">
          {/* Back Button */}
          <button onClick={navigateToHome} className="projectslist-back-btn">
            <span className="projectslist-back-icon">←</span>
            <span className="back-text">Back</span>
          </button>
          
          <div className="projects-list-header">
            <h2 className="section-title">All Projects</h2>
            <p className="section-description">
              {PERSONAL_INFO.SECTION_DESCRIPTIONS.projects}
            </p>
          </div>
          
          <div className="projects-list-grid">
            {PERSONAL_INFO.PROJECTS.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
                navigateToProject={navigateToProject}
                projectId={project.id !== undefined ? project.id : idx}
                showLink={true} 
              />
            ))}
          </div>

          {/* Go To Top Button - After the list */}
          <div className="go-to-top-section">
            <button onClick={scrollToTop} className="go-to-top-btn">
              <span className="go-to-top-icon">↑</span>
              <span className="go-to-top-text">Go To Top</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProjectsList;
