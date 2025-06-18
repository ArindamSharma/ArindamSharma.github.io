import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import AboutSection from "../components/section/about";
import ProjectSection from "../components/section/project";
import ExperienceSection from "../components/section/experience";
import HireSection from "../components/section/hire";
import "./home.css";
import "../index.css";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <AboutSection />
      <ProjectSection />
      <ExperienceSection />
      <HireSection />
      <Footer />
    </div>
  );
}

export default Home;
