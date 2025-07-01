import React from "react";
import "./project.css";
import { PERSONAL_INFO } from "../../constants";
import ProjectCard from "../ProjectCard";
import { useNavigate } from "react-router-dom";

function ProjectSection() {
	const navigate = useNavigate();
	
	const handleViewAllProjects = () => {
		navigate('/projects');
	};

	return (
		<section className="projects-section section" id="projects">
			<div className="container">
				<h2 className="section-title">Featured Projects</h2>
				<p className="projects-subtitle">
					Explore some of my recent work showcasing various technologies and problem-solving approaches
				</p>
				
				<div className="projects-container">
					<div className="projects-grid">
						{PERSONAL_INFO.PROJECTS.slice(0, 6).map((project, idx) => (
							<ProjectCard
								key={idx}
								project={project}
								navigateTo={`/project/${project.id !== undefined ? project.id : idx}`}
								showLink={true}
							/>
						))}
						
						{/* See More Projects Card */}
						<div className="see-more-card" onClick={handleViewAllProjects}>
							<div className="see-more-content">
								<div className="see-more-icon">→</div>
								<h3 className="see-more-title">View All Projects</h3>
								<p className="see-more-description">
									Discover more of my work and explore detailed case studies
								</p>
								<button className="see-more-btn">
									<span>See More</span>
									<span className="btn-icon">→</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ProjectSection;
