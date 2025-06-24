import React from "react";
import "./project.css";
import { PROJECTS } from "../../constants";
import ProjectCard from "../ProjectCard";


function ProjectSection() {
	return (
		<section className="projects-section" id="projects">
			<div className="projects-section-col1">
				<h2 className="projects-section-header">Work So Far</h2>
				<div className="projects-section-grid">
					{PROJECTS.slice(0, 2).map((project, idx) => (
						<ProjectCard
							key={idx}
							project={project}
							navigateTo={`/project/${project.id !== undefined ? project.id : idx}`}
							showLink={true}
						/>
					))}
				</div>
			</div>
			<div className="projects-section-col2">
				<div className="projects-section-grid">
					{PROJECTS.slice(2,4).map((project, idx) => (
						<ProjectCard
							key={idx + 4}
							project={project}
							navigateTo={`/project/${project.id !== undefined ? project.id : idx + 4}`}
							showLink={true}
						/>
					))}

					{/* See More Project Card */}
					<ProjectCard
						key={PROJECTS.length}
						project={{ title: "See More Projects →" }}
						navigateTo="/projectslist"
						showLink={false}
					/>
				</div>
			</div>
		</section>
	);
}

export default ProjectSection;
