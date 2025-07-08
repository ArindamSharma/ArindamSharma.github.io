const PROJECTS = [
	{
		title: "Evolution Simulator (Final Year Project)",
		duration: "Mar 2022 – Apr 2022",
		description: [
			"Simulates Evolution based on Natural Selection and implements complex structure of Neurons in a Neural Network simulating a living brain.",
			"Uniquely implemented network of neurons as Graphs increasing the flexibility of adding dynamic neurons to the network without disturbing the weights of other connected neurons.",
			"Creates a 2D Environment showcasing the behaviours and decision making of Individuals based on its environment obstacles, leading to its survival or death.",
			"Extensive use of Object can be seen across the project using OOP's Concept.",
			"Usage of Genetic Algorithms, Genomes, brings it closer to the reality lead to realistic simulation.",
			"Simulator includes Self‑Replication, Inheritance, Mutation, Natural Selection, Survival of the Fittest concepts of Evolution.",
		],
		skills: [
			SKILLS.cpp,
			SKILLS.neuralNetworks,
			SKILLS.geneticAlgorithms,
			SKILLS.objectOrientedProgramming,
			SKILLS.dataStructures,
			SKILLS.algorithms
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/evolution-using-selection"
			}
		],
		images: [
			"/resource/img/projects/project1.jpg",
		],
	},
	{
		title: "Password Manager Tool (Personal Project)",
		duration: "Jan 2021 – Ongoing",
		description: [
			"A Python application for managing passwords and sensitive information securely using vaults. Users can create and manage multiple secure containers/items for credentials and sensitive data, and edit individual items. Includes a built-in Password Generator for strong, random passwords.",
			"Ongoing development: While the graphical user interface (GUI) is currently under development, the Command-line Interface (CLI) is fully functional and continuously enhanced.",
		],
		skills: [
			SKILLS.python,
			SKILLS.guiDevelopment,
			SKILLS.cliDevelopment,
			SKILLS.fileHandling,
			SKILLS.cryptography,
			SKILLS.objectOrientedProgramming
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/password_manager/tree/master/v3"
			},
			{
				name: "Live Demo",
				link: "https://password-manager-demo.example.com"
			}
		],
		images: [
			"/resource/img/projects/project2.jpg",
		],
	},
	{
		title: "Placement Website (IIITDM Kancheepuram)",
		duration: "Aug 2021 – Dec 2021",
		description: [
			"A new version of our college Placement website with a new platform, website design, and interface.",
			"Developed a comprehensive web application for managing college placements with modern UI/UX design principles.",
			"Implemented features for student registration, company profiles, job postings, and application tracking.",
			"Created responsive design ensuring compatibility across all devices and browsers.",
		],
		skills: [
			SKILLS.javascript,
			SKILLS.htmlcss,
			SKILLS.expressjs,
			SKILLS.nodejs,
			SKILLS.bootstrap,
			SKILLS.webDevelopment,
			SKILLS.frontendDesign,
			SKILLS.backendDevelopment
		],
		links: [
			{
				name: "Live Website",
				link: "https://placements.iiitdm.ac.in"
			},
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/placement-website"
			}
		],
		images: [
			"/resource/img/projects/project3.jpg",
		],
	},
	{
		title: "File Explorer Interface Design | UX/UI Designing",
		duration: "Oct 2021 – Nov 2021",
		description: [
			"File Explorer Interface design, built as a part of Human-Computer Interaction Course.",
			"Created a comprehensive redesign of the traditional file explorer with modern UI principles.",
			"Focused on improving user experience through intuitive navigation and visual hierarchy.",
			"Implemented responsive design patterns and accessibility considerations.",
		],
		skills: [
			SKILLS.figma,
			SKILLS.adobeXd,
			SKILLS.humanComputerInteraction,
		],
		links: [
			{
				name: "Figma Design",
				link: "https://figma.com/file/yIWU5lGhFELTISPypelHMF/Hakuna-Matata?node-id=658%3A2379"
			}
		],
		images: [
			"/resource/img/projects/project4.jpg",
		],
	},
	{
		title: "OpenGL Based Test Frame",
		duration: "Sep 2020 – Oct 2020",
		description: [
			"Used to test OpenGL functionalities and explore 3D graphics programming.",
			"Developed a comprehensive testing framework for OpenGL features including rendering, shaders, and 3D transformations.",
			"Implemented various graphics techniques including texture mapping, lighting models, and geometric transformations.",
			"Created a foundation for understanding computer graphics principles and GPU programming.",
		],
		skills: [
			SKILLS.c,
			SKILLS.cpp,
			SKILLS.opengl,
			SKILLS.computerGraphics
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/openGl-project-0"
			}
		],
		images: [
			"/resource/img/projects/project5.jpg",
		],
	},
	{
		title: "Image Processing using YOLO3 and darknetFramework",
		duration: "Feb 2021 – Mar 2021",
		description: [
			"Detection of waste such as plastic bottles, plastic bags from real-time images captured by a beach cleaner Bot.",
			"Skills: Shell Scripting, Python, OpenCV.",
		],
		skills: [
			SKILLS.python,
			SKILLS.opencv,
			SKILLS.yolo3od,
			SKILLS.darknetFramework,
			SKILLS.computerVision,
			SKILLS.imageProcessing,
			SKILLS.shellScripting
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/Image-Processing"
			}
		],
		images: [
			"/resource/img/projects/project6.jpg",
		],
	},
	{
		title: "Simple Neural Network for MNIST data",
		duration: "Dec 2020 – Jan 2021",
		description: [
			"Machine learning program used to learn MNIST data, built from scratch.",
			"Skills: C/C++, Python.",
		],
		skills: [
			SKILLS.python,
			SKILLS.c,
			SKILLS.cpp,
			SKILLS.machineLearning,
			SKILLS.neuralNetworks,
			SKILLS.deepLearning,
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/neural-network-1"
			}
		],
		images: [
			"/resource/img/projects/project7.jpg",
		],
	},
	{
		title: "Web Server Hosting",
		duration: "Nov 2020 – Dec 2020",
		description: [
			"It can host a website in a particular Domain if the end user uploads the file required (in some specific format) to host the page with the help of Socket Programming.",
			"Using multithreading, it can run multiple requests simultaneously.",
			"Skills: C, Java, Multi-threading, Socket Programming.",
		],
		skills: [
			SKILLS.c,
			SKILLS.java,
			SKILLS.socketProgramming,
			SKILLS.multithreading,
			SKILLS.concurrentProgramming
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/Webserver"
			}
		],
		images: [
			"/resource/img/projects/project8.jpg",
		],
	},
	{
		title: "Linear Discriminant Analysis with Verilog implementation",
		duration: "Jul 2021 – Aug 2021",
		description: [
			"This Algorithm is used with Verilog (HDL). It is used to simulate the behavior of actual Hardware like logic gates, adders, multipliers, and Multiplier-Accumulator (MAC). It uses file handling python support for handling/executing Verilog file.",
			"Skills Used: Python, Verilog.",
		],
		skills: [
			SKILLS.python,
			SKILLS.verilog,
			SKILLS.hardwareDescriptionLanguage,
			SKILLS.hardwareSimulation
		],
		links: [
			{
				name: "GitHub Repository",
				link: "https://github.com/ArindamSharma/VLSI-Project-Linear-Discriminant-Analysis-LDA"
			}
		],
		images: [
			"/resource/img/projects/project9.jpg",
		],
	},
	{
		title: "Chakravyuha (Samgatha 2k18)",
		duration: "Mar 2018 – Apr 2018",
		description: [
			"Design a robot for the Indian Navy which can perform operations both manually and switch to autonomous when needed.",
			"Design another manual robot for the Indian Army which can traverse different land conditions.",
			"Skills Used: Arduino, C Basic.",
			"Achieved first position in the competition.",
		],
		skills: [
			SKILLS.arduino,
			SKILLS.c,
			SKILLS.robotics,
		],
		links: [],
		images: [
			"/resource/img/projects/project10.jpg",
		],
	},
	{
		title: "Hospital Administrative Section Website",
		duration: "May 2020 – Jun 2020",
		description: [
			"The Management Section such as Medicine, Patient Receipt Generator, Patient Room Allotment, Appointment Management, Doctor Entry Record, etc.",
			"Skills Used: Python, SQL, HTML, CSS. Packages Used: Flask Framework, jQuery, Ajax.",
		],
		skills: [
			SKILLS.python,
			SKILLS.flask,
			SKILLS.mysql,
			SKILLS.htmlcss,
			SKILLS.jquery,
			SKILLS.ajax,
			SKILLS.databaseManagement,
			SKILLS.webDevelopment,
		],
		links: [],
		images: [
			"/resource/img/projects/project11.jpg",
		],
	},
];