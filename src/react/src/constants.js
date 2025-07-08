
// Runtime configuration access utility
// PERSONAL_INFO is now defined as a global constant in public/resource/constants/me.js
// This file simply re-exports it for use within the React app

const getConfig = () => {
  if (typeof window !== 'undefined' && window.PERSONAL_INFO) {
    return window.PERSONAL_INFO;
  }
  
  // Fallback configuration for development or if me.js fails to load
  return {
    name: "Arindam Sharma",
    title: ["Software Developer"],
    location: "India",
    experience: "3+ Years",
    profileImage: "/resource/img/1732601951208.jpg",
	noImage: "/resource/img/noimage.jpg",
    resumeLink: "/resource/Arindam_Sharma_Resume_6.4.2.pdf",
    CONTACT_INFO: {
      email: "arindamsharma1998@gmail.com",
      location: "India",
      availability: "Available for freelance projects",
    },
    SECTION_DESCRIPTIONS: {
      about: "Passionate about crafting seamless digital experiences with clean, efficient code.",
      projects: "Explore my complete collection of projects.",
      skills: "Technologies and tools I work with.",
      experience: "My professional journey.",
      education: "Academic background.",
      achievements: "Notable accomplishments.",
      contact: "Let's get in touch!"
    },
    SOCIAL_LINKS: [],
    EDUCATION: [],
    ACHIEVEMENT_STATS: [],
    ACHIEVEMENTS: [],
    PROJECTS: [],
    EXPERIENCES: [],
    SKILLS: [],
    BLOGS: []
  };
};

// Export the main personal info constant
export const PERSONAL_INFO = getConfig();
// console.log("PERSONAL_INFO", PERSONAL_INFO);