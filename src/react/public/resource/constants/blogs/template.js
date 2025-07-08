// any new blog must be added to the blogs list in me.js and index.html
const blog_number = {
	title: "Title of the Blog",
	publishDate: "PublishDate",
	author: "AuthorName",
	readTime: "xx min read",
	category: "CategoryName",
	tags: ["Tag1", "Tag2"],
	summary: "Summary Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	image: "/resource/img/projects/project1.jpg",
	content: [
		{
			type: "heading",
			level: 1, // Possible level: 1 (h1), 2 (h2), 3 (h3), 4 (h4), 5 (h5), 6 (h6)
			content: "Main Heading (H1)"
		},

		// PARAGRAPH - Simple text content
		{
			type: "paragraph",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
		},

		// LIST - Bullet points
		{
			type: "list",
			listType: "bullet", // Possible listType: bullets, numbered
			items: [
				"First numbered item",
				"Second numbered item",
				"Third numbered item"
			]
		},

		// CODE BLOCK - Various programming languages with copy functionality
		{
			type: "code",
			language: "javascript", // Possible languages: javascript, python, bash.
			content: "// JavaScript example\nconst greeting = 'Hello, World!';\nconsole.log(greeting);\n\nfunction calculateSum(a, b) {\n    return a + b;\n}\n\nconst result = calculateSum(5, 3);\nconsole.log('Sum:', result);"
			// content: "# Python example\ndef calculate_sum(a, b):\n    return a + b\n\ngreeting = 'Hello, World!'\nprint(greeting)\n\nresult = calculate_sum(5, 3)\nprint(f'Sum: {result}')"
			// content: "# Bash/Terminal commands\nnode --version\nnpm --version\n\n# Install dependencies\nnpm install\n\n# Start development server\nnpm start"
		},

		{
			type: "image",
			images: [ // Array with multiple images triggers image rotator
				"/resource/img/projects/project3.jpg",
				"/resource/img/projects/project4.jpg",
				"/resource/img/projects/project5.jpg",
				"/resource/img/projects/project6.jpg"
			],
			alt: "Project screenshots slideshow", // Alt text for all images (optional)
			caption: "Multiple screenshots showing different features of the project", // Optional caption
			interval: 3000, // Optional: rotation interval in milliseconds (default: 3000)
			showNavigator: true // Optional: show dot navigation (default: true)
		},

		// TABLE - For structured data
		{
			type: "table",
			headers: ["Feature", "Description", "Status"], // Column headers (required)
			rows: [ // Array of arrays, each inner array represents a row (required)
				["Authentication", "User login and registration", "✅ Complete"],
				["Dashboard", "Main user interface", "🚧 In Progress"],
				["Reports", "Data visualization", "📋 Planned"]
			]
		}

		// NOTE: The following content types are NOT supported in blogdetail.js:
		// - blockquote
		// - divider
		// - callout/alert
		// - link (standalone)
		// - video
		// - iframe
		// Only the 6 types above (heading, paragraph, list, code, image, table) are implemented
	]
};