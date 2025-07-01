import React from "react";
import "./ProjectCard.css";
import ImageRotator from "./ImageRotator";
import { useNavigate } from "react-router-dom";

function ProjectCard({ project, navigateTo, showLink = false }) {
  const navigate = useNavigate();
  // Limit description to 200 characters after joining all items if it's an array
  const getShortDescription = () => {
    let desc = Array.isArray(project.description)
      ? project.description.join(" ")
      : project.description;
    desc = typeof desc === "string" ? desc : "";
    return desc.length > 150 ? desc.slice(0, 150) + "..." : desc;
  };

  return (
    <div className="portfolio-project-card" onClick={() => navigate(navigateTo)}>
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
            <a
              href={navigateTo}
              className="portfolio-project-link"
              onClick={e => { e.stopPropagation(); navigate(navigateTo); }}
            >
              View Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
