import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutSection from "../components/section/about";
import SkillsSection from "../components/section/skills";
import ProjectSection from "../components/section/project";
import ExperienceSection from "../components/section/experience";
import AchievementsSection from "../components/section/achievements";
import HireSection from "../components/section/hire";
import "./home.css";
import "../index.css";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <ExperienceSection />
      <AchievementsSection />
      <HireSection />
      <Footer />
    </div>
  );
}

export default Home;
