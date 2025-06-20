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
    <div className="project-card" onClick={() => navigate(navigateTo)}>
      {project.images && (
        <div className="project-card-img-holder">
          <ImageRotator images={project.images} interval={4000} showNavigator={false} />
        </div>
      )}
      <div className="project-info">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-short-desc">{getShortDescription()}</p>
        {showLink && (
          <a
            href={navigateTo}
            className="project-link"
            onClick={e => { e.stopPropagation(); navigate(navigateTo); }}
          >
            View Details
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
