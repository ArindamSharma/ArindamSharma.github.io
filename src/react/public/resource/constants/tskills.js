const SKILLS = {
	python: {
		name: "Python",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg"
	},
	cpp: {
		name: "C++",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg"
	},
	c: {
		name: "C",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/c.svg"
	},
	csharp: {
		name: "C#",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/csharp.svg"
	},
	java: {
		name: "Java",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openjdk.svg"
	},
	shellScripting: {
		name: "Shell Scripting",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gnubash.svg"
	},
	verilog: {
		name: "Verilog",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vivado.svg"
	},
	htmlcss: {
		name: "HTML/CSS",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg"
	},
	javascript: {
		name: "JavaScript",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
	},
	angular: {
		name: "Angular",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/angular.svg"
	},
	react: {
		name: "React",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
	},
	nodejs: {
		name: "Node.js",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg"
	},
	expressjs: {
		name: "Express.js",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg"
	},
	flask: {
		name: "Flask",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flask.svg"
	},
	bootstrap: {
		name: "Bootstrap",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bootstrap.svg"
	},
	jquery: {
		name: "jQuery",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jquery.svg"
	},
	ajax: {
		name: "Ajax",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg"
	},
	mysql: {
		name: "MySQL",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg"
	},
	mariadb: {
		name: "MariaDB",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mariadb.svg"
	},
	cassandra: {
		name: "Cassandra",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachecassandra.svg"
	},
	mongodb: {
		name: "MongoDB",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg"
	},
	postgresql: {
		name: "PostgreSQL",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg"
	},
	redis: {
		name: "Redis",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg"
	},
	graphql: {
		name: "GraphQL",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/graphql.svg"
	},
	opencv: {
		name: "OpenCV",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opencv.svg"
	},
	opengl: {
		name: "OpenGL",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opengl.svg"
	},
	yolo3od: {
		name: "YOLO3 Object Detection",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pytorch.svg"
	},
	darknetFramework: {
		name: "Darknet Framework",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pytorch.svg"
	},
	robotics: {
		name: "Robotics",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/arduino.svg"
	},
	dotnet: {
		name: ".NET",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dotnet.svg"
	},
	windowsRegistry: {
		name: "Windows Registry",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/windows.svg"
	},
	rtc: {
		name: "RTC Client",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg"
	},
	springBoot: {
		name: "Spring Boot",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/springboot.svg"
	},
	maven: {
		name: "Maven",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/apachemaven.svg"
	},
	restApi: {
		name: "REST API",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/swagger.svg"
	},
	//Softwares
	docker: {
		name: "Docker",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg"
	},
	linux: {
		name: "Linux",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linux.svg"
	},
	arduino: {
		name: "Arduino",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/arduino.svg"
	},
	figma: {
		name: "Figma",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/figma.svg"
	},
	git: {
		name: "Git",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg"
	},
	adobeXd: {
		name: "Adobe XD",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobexd.svg"
	},
	// Technologies/Categories/Concepts
	imageProcessing: {
		name: "Image Processing",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opencv.svg"
	},
	geneticAlgorithms: {
		name: "Genetic Algorithms",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dna.svg"
	},
	neuralNetworks: {
		name: "Neural Networks",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg"
	},
	machineLearning: {
		name: "Machine Learning",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg"
	},
	deepLearning: {
		name: "Deep Learning",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pytorch.svg"
	},
	computerVision: {
		name: "Computer Vision",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opencv.svg"
	},
	databaseManagement: {
		name: "Database Management",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg"
	},
	computerGraphics: {
		name: "Computer Graphics",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opengl.svg"
	},
	humanComputerInteraction: {
		name: "Human-Computer Interaction",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/interaction.svg"
	},
	frontendDesign: {
		name: "Frontend Design",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg"
	},
	backendDevelopment: {
		name: "Backend Development",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg"
	},
	webDevelopment: {
		name: "Web Development",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg"
	},
	fileHandling: {
		name: "File Handling",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/files.svg"
	},
	cryptography: {
		name: "Cryptography",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/letsencrypt.svg"
	},
	hardwareDescriptionLanguage: {
		name: "Hardware Description Language",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xilinx.svg"
	},
	hardwareSimulation: {
		name: "Hardware Simulation",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xilinx.svg"
	},
	socketProgramming: {
		name: "Socket Programming",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/socketdotio.svg"
	},
	multithreading: {
		name: "Multithreading",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg"
	},
	objectOrientedProgramming: {
		name: "Object-Oriented Programming",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeigniter.svg"
	},
	softwareDesignPatterns: {
		name: "Software Design Patterns",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/blueprint.svg"
	},
	systemArchitecture: {
		name: "System Architecture",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/diagramsdotnet.svg"
	},
	concurrentProgramming: {
		name: "Concurrent Programming",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg"
	},
	guiDevelopment: {
		name: "GUI Development",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg"
	},
	cliDevelopment: {
		name: "CLI Development",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gnubash.svg"
	},
	dataStructures: {
		name: "Data Structures",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/datadog.svg"
	},
	algorithms: {
		name: "Algorithms",
		icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codingninjas.svg"
	},
}