import React from "react";
import "./ProjectCard.css";
import ImageRotator from "./ImageRotator";

function ProjectCard({ project, navigateToProject, projectId, showLink = false }) {
  // Limit description to 200 characters after joining all items if it's an array
  const getShortDescription = () => {
    let desc = Array.isArray(project.description)
      ? project.description.join(" ")
      : project.description;
    desc = typeof desc === "string" ? desc : "";
    return desc.length > 150 ? desc.slice(0, 150) + "..." : desc;
  };

  const handleClick = () => {
    if (navigateToProject) {
      navigateToProject(projectId);
    }
  };

  return (
    <div onClick={handleClick} className="portfolio-project-card" style={{ cursor: 'pointer' }}>
      {project.images && (
        <div className="portfolio-project-card-img-holder">
          <ImageRotator images={project.images} interval={4000} showNavigator={false} />
        </div>
      )}
      <div className="portfolio-project-info">
        <h3 className="portfolio-project-title">{project.title}</h3>
        {project.duration && (
          <div className="portfolio-project-duration">{project.duration}</div>
        )}
        <p className="portfolio-project-short-desc">{getShortDescription()}</p>
        <div className="portfolio-project-separator"></div>
        <div className="portfolio-project-footer">
          {showLink && (
            <span className="portfolio-project-link">
              View Details
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
