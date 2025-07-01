import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { PERSONAL_INFO } from "../constants";
import "./home.css";
import "./projectslist.css";
import ProjectCard from "../components/ProjectCard";

function ProjectsList() {
  return (
    <div className="container">
      <Navbar />
      <section className="projects-list-section" id="projects-list">
        {/* Back Button */}
        <button onClick={() => window.history.back()} className="back-btn">
          ← Back
        </button>
        <h2>All Projects</h2>
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
      </section>
      <Footer />
    </div>
  );
}

export default ProjectsList;
