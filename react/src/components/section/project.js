import React from "react";
import "./project.css";
import { PROJECTS } from "../../constants";
import ProjectCard from "../ProjectCard";


function ProjectSection() {
	return (
		<section className="projects-section" id="projects">
			<h2>Work So Far</h2>
			<div className="projects-section-grid">
				{PROJECTS.slice(0, 4).map((project, idx) => (
					<ProjectCard
						key={idx}
						project={project}
						navigateTo={`/project/${project.id !== undefined ? project.id : idx}`}
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
		</section>
	);
}

export default ProjectSection;
