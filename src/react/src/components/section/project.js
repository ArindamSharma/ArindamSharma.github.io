import React from "react";
import "./project.css";
import { PERSONAL_INFO } from "../../constants";
import ProjectCard from "../ProjectCard";

function ProjectSection({ navigateToProjects, navigateToProject }) {
	return (
		<section className="projects-section section" id="fprojects">
			<div className="container">
				<h2 className="section-title">Featured Projects</h2>
				<p className="projects-subtitle">
					{PERSONAL_INFO.SECTION_DESCRIPTIONS.projectsFeatured}
				</p>
				
				<div className="projects-container">
					<div className="projects-grid">
						{PERSONAL_INFO.PROJECTS.slice(0, 5).map((project, idx) => (
							<ProjectCard
								key={idx}
								project={project}
								navigateToProject={navigateToProject}
								projectId={project.id !== undefined ? project.id : idx}
								showLink={true}
							/>
						))}
						
						{/* See More Projects Card */}
						<div onClick={navigateToProjects} className="see-more-card" style={{ cursor: 'pointer' }}>
							<div className="see-more-content">
								<div className="see-more-icon">→</div>
								<h3 className="see-more-title">View All Projects</h3>
								<p className="see-more-description">
									Discover more of my work and explore detailed case studies
								</p>
								<div className="see-more-btn">
									<span>See More</span>
									<span className="project-btn-icon">→</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectSection;
