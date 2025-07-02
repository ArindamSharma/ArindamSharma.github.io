import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectslist.css";
import ProjectCard from "../components/ProjectCard";

function ProjectsList() {
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
          <a href="/" className="back-btn">
            <span className="back-icon">←</span>
            <span className="back-text">Back</span>
          </a>
          
          <div className="projects-list-header">
            <h2 className="section-title">All Projects</h2>
            <p className="section-description">
              Explore my complete collection of projects, from web applications to mobile apps, 
              showcasing diverse technologies and innovative solutions.
            </p>
          </div>
          
          <div className="projects-list-grid">
            {PERSONAL_INFO.PROJECTS.map((project, idx) => (
              <ProjectCard 
                key={idx} 
                project={project} 
                navigateTo={`/project/${project.id !== undefined ? project.id : idx}`}
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
