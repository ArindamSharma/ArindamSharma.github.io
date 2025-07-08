// any new blog must be added to the blogs list in me.js and index.html
const blog_number = {
	title: "Title of the Blog",
	publishDate: "PublishDate",
	author: "AuthorName",
	readTime: "xx min read",
	category: "CategoryName",
	tags: ["Tag1", "Tage2", ],
	summary: "Summary Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	image: "/resource/img/projects/project1.jpg",
	content: [
		{
			type: "paragraph",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		},
		{
			type: "heading",
			level: 2,
			content: "Lorem Ipsum Dolor Sit Amet Consectetur"
		},
		{
			type: "paragraph",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
		},
		{
			type: "list",
			listType: "bullet",//
			items: [
				"AI-powered code suggestions and completions",
				"Support for dozens of programming languages",
				"Context-aware recommendations",
				"Integrated directly into VS Code and other editors",
				"Learns from your coding patterns and preferences"
			]
		},
		{
			type: "heading",
			level: 2,
			content: "Getting Started: Prerequisites and Setup"
		},
		{
			type: "paragraph",
			content: "Before we dive into building our portfolio, let's make sure we have everything we need. Here's what you'll need to get started:"
		},
		{
			type: "heading",
			level: 3,
			content: "Essential Tools"
		},
		{
			type: "list",
			listType: "numbered",
			items: [
				"Visual Studio Code (VS Code) - Our primary development environment",
				"Node.js and npm - For managing dependencies and running our React app",
				"GitHub Copilot extension - Our AI pair programmer",
				"Git - For version control and deployment",
				"A GitHub account - For hosting and Copilot access"
			]
		},
		{
			type: "heading",
			level: 3,
			content: "Installing GitHub Copilot"
		},
		{
			type: "paragraph",
			content: "First, you'll need to install the GitHub Copilot extension in VS Code. Open VS Code, go to the Extensions panel, and search for 'GitHub Copilot'. Install the extension and sign in with your GitHub account."
		},
		{
			type: "code",
			language: "bash",
			content: "# Verify Node.js installation\nnode --version\nnpm --version\n\n# Install create-react-app globally\nnpm install -g create-react-app\n\n# Create a new React project\nnpx create-react-app my-portfolio\ncd my-portfolio\n\n# Start the development server\nnpm start"
		},
		{
			type: "heading",
			level: 2,
			content: "Project Structure and Planning"
		},
		{
			type: "paragraph",
			content: "With GitHub Copilot, planning your project structure becomes much more intuitive. As you create files and folders, Copilot will suggest names and structures based on common patterns. Here's how I structured my portfolio:"
		},
		{
			type: "code",
			language: "text",
			content: "my-portfolio/\n├── public/\n│   ├── index.html\n│   └── resource/\n│       ├── img/\n│       └── resume.pdf\n├── src/\n│   ├── components/\n│   │   ├── Navbar.js\n│   │   ├── Footer.js\n│   │   └── sections/\n│   ├── pages/\n│   │   ├── Home.js\n│   │   ├── BlogsList.js\n│   │   └── BlogDetail.js\n│   ├── constants.js\n│   ├── App.js\n│   └── index.js\n└── package.json"
		},
		{
			type: "heading",
			level: 2,
			content: "Building Components with Copilot"
		},
		{
			type: "paragraph",
			content: "One of the most impressive features of GitHub Copilot is how it helps you build React components. When you start typing a component name or function, Copilot often suggests the entire component structure. Here's how I built the navigation component:"
		},
		{
			type: "heading",
			level: 3,
			content: "Creating the Navigation Component"
		},
		{
			type: "paragraph",
			content: "I simply started typing 'function Navbar' and Copilot suggested a complete navigation component with modern styling and responsive design:"
		},
		{
			type: "code",
			language: "javascript",
			content: "import React, { useState } from 'react';\nimport './Navbar.css';\n\nfunction Navbar() {\n  const [isMenuOpen, setIsMenuOpen] = useState(false);\n\n  const toggleMenu = () => {\n    setIsMenuOpen(!isMenuOpen);\n  };\n\n  return (\n    <nav className=\"navbar\">\n      <div className=\"nav-container\">\n        <div className=\"nav-logo\">\n          <a href=\"#home\">Arindam Sharma</a>\n        </div>\n        <div className={\\`nav-menu \\${isMenuOpen ? 'active' : ''}\\`}>\n          <a href=\"#home\" className=\"nav-link\">Home</a>\n          <a href=\"#about\" className=\"nav-link\">About</a>\n          <a href=\"#projects\" className=\"nav-link\">Projects</a>\n          <a href=\"#blogs\" className=\"nav-link\">Blogs</a>\n          <a href=\"#contact\" className=\"nav-link\">Contact</a>\n        </div>\n        <div className=\"nav-toggle\" onClick={toggleMenu}>\n          <span className=\"bar\"></span>\n          <span className=\"bar\"></span>\n          <span className=\"bar\"></span>\n        </div>\n      </div>\n    </nav>\n  );\n}\n\nexport default Navbar;"
		},
		{
			type: "heading",
			level: 2,
			content: "Styling with Copilot's CSS Suggestions"
		},
		{
			type: "paragraph",
			content: "GitHub Copilot is equally impressive when it comes to CSS. It understands modern CSS practices, flexbox, grid, and responsive design patterns. When I started writing CSS for the navbar, Copilot suggested a complete responsive design:"
		},
		{
			type: "code",
			language: "css",
			content: ".navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.9);\n  backdrop-filter: blur(10px);\n  z-index: 1000;\n  transition: all 0.3s ease;\n}\n\n.nav-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 70px;\n}\n\n.nav-logo a {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: #fff;\n  text-decoration: none;\n  background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n\n.nav-menu {\n  display: flex;\n  gap: 2rem;\n}\n\n.nav-link {\n  color: #fff;\n  text-decoration: none;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  position: relative;\n}\n\n.nav-link:hover {\n  color: #3b82f6;\n}\n\n.nav-link::after {\n  content: '';\n  position: absolute;\n  bottom: -5px;\n  left: 0;\n  width: 0;\n  height: 2px;\n  background: linear-gradient(45deg, #3b82f6, #8b5cf6);\n  transition: width 0.3s ease;\n}\n\n.nav-link:hover::after {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .nav-menu {\n    position: fixed;\n    top: 70px;\n    right: -100%;\n    width: 100%;\n    height: calc(100vh - 70px);\n    background: rgba(0, 0, 0, 0.95);\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    padding-top: 2rem;\n    transition: right 0.3s ease;\n  }\n\n  .nav-menu.active {\n    right: 0;\n  }\n\n  .nav-toggle {\n    display: flex;\n    flex-direction: column;\n    cursor: pointer;\n  }\n\n  .bar {\n    width: 25px;\n    height: 3px;\n    background: #fff;\n    margin: 3px 0;\n    transition: 0.3s;\n  }\n}"
		},
		{
			type: "heading",
			level: 2,
			content: "Creating Dynamic Content with Data Structures"
		},
		{
			type: "paragraph",
			content: "One of the key features of my portfolio is the dynamic content system. I created a comprehensive data structure in constants.js that holds all my personal information, projects, blog posts, and skills. Copilot helped me design a flexible structure that can easily accommodate different types of content:"
		},
		{
			type: "code",
			language: "javascript",
			content: "// Copilot suggested this structure when I started typing 'export const PERSONAL_INFO'\nexport const PERSONAL_INFO = {\n  name: \"Arindam Sharma\",\n  title: [\"Software Developer\", \"Tech Innovator\", \"Problem Solver\"],\n  location: \"India\",\n  experience: \"3+ Years\",\n  profileImage: \"/resource/img/profile.jpg\",\n  resumeLink: \"/resource/resume.pdf\",\n  \n  PROJECTS: [\n    {\n      id: 1,\n      title: \"Evolution Simulator\",\n      description: \"AI-powered evolution simulation using neural networks\",\n      skills: [\"C++\", \"Neural Networks\", \"Genetic Algorithms\"],\n      links: [{\n        name: \"GitHub\",\n        url: \"https://github.com/username/project\"\n      }],\n      images: [\"/resource/img/project1.jpg\"]\n    }\n  ],\n  \n  BLOGS: [\n    {\n      id: 1,\n      title: \"Building Modern Web Applications\",\n      author: \"Arindam Sharma\",\n      publishDate: \"2024-12-20\",\n      readTime: \"8 min read\",\n      category: \"Web Development\",\n      tags: [\"React\", \"Node.js\", \"JavaScript\"],\n      summary: \"A comprehensive guide to modern web development\",\n      content: [\n        {\n          type: \"paragraph\",\n          content: \"Introduction to modern web development...\"\n        },\n        {\n          type: \"heading\",\n          level: 2,\n          content: \"Getting Started\"\n        },\n        {\n          type: \"code\",\n          language: \"javascript\",\n          content: \"const app = express();\"\n        }\n      ]\n    }\n  ]\n};"
		},
		{
			type: "heading",
			level: 2,
			content: "Building the Blog System"
		},
		{
			type: "code",
			language: "javascript",
			content: "// Copilot suggested lazy loading for images\nconst LazyImage = ({ src, alt, className }) => {\n  const [isLoaded, setIsLoaded] = useState(false);\n  const [isInView, setIsInView] = useState(false);\n  const imgRef = useRef();\n\n  useEffect(() => {\n    const observer = new IntersectionObserver(\n      ([entry]) => {\n        if (entry.isIntersecting) {\n          setIsInView(true);\n          observer.disconnect();\n        }\n      },\n      { threshold: 0.1 }\n    );\n\n    if (imgRef.current) {\n      observer.observe(imgRef.current);\n    }\n\n    return () => observer.disconnect();\n  }, []);\n\n  return (\n    <div ref={imgRef} className={className}>\n      {isInView && (\n        <img\n          src={src}\n          alt={alt}\n          onLoad={() => setIsLoaded(true)}\n          style={{\n            opacity: isLoaded ? 1 : 0,\n            transition: 'opacity 0.3s ease'\n          }}\n        />\n      )}\n    </div>\n  );\n};"
		},
		{
			type: "heading",
			level: 2,
			content: "Conclusion: The Future of AI-Assisted Development"
		},
		{
			type: "list",
			listType: "bullet",
			items: [
				"Copilot excels at suggesting entire code structures and patterns",
				"It's particularly strong with modern web development frameworks and libraries",
				"The quality of suggestions improves dramatically with clear, descriptive code",
				"It can help you learn new technologies and best practices",
				"It's not just about speed—it's about learning and improving as a developer"
			]
		},
		{
			type: "paragraph",
			content: "Whether you're a beginner looking to learn web development or an experienced developer wanting to boost your productivity, GitHub Copilot can be an invaluable tool in your development toolkit. Give it a try, and I'm confident you'll be amazed at what you can build together."
		}
	]
};