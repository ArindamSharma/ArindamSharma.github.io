import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutSection from "../components/section/about";
import SkillsSection from "../components/section/skills";
import EducationSection from "../components/section/education";
import ProjectSection from "../components/section/project";
import ExperienceSection from "../components/section/experience";
import AchievementsSection from "../components/section/achievements";
import HireSection from "../components/section/hire";
import "./home.css";
import "../index.css";

function Home({ navigateToProjects, navigateToProject, navigateToHome }) {
  return (
    <div className="home-container">
      <Navbar />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection navigateToProjects={navigateToProjects} navigateToProject={navigateToProject} />
      <EducationSection />
      <SkillsSection />
      <AchievementsSection />
      <HireSection />
      <Footer navigateToProjects={navigateToProjects} navigateToProject={navigateToProject} navigateToHome={navigateToHome} />
    </div>
  );
}

export default Home;
