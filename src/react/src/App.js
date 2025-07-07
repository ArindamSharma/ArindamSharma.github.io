import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/home';
import ProjectsList from './pages/projectslist';
import ProjectDetail from './pages/projectdetail';
import BlogsList from './pages/blogslist';
import BlogDetail from './pages/blogdetail';

function App() {
	const [page, setPage] = useState('home');
	const [projectId, setProjectId] = useState(null);
	const [blogId, setBlogId] = useState(null);

	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash.slice(1); // Remove # prefix
			
			if (hash === 'projects') {
				setPage('projects');
			} else if (hash.startsWith('project/')) {
				setPage('project');
				setProjectId(hash.split('/')[1]);
			} else if (hash === 'blogs') {
				setPage('blogs');
			} else if (hash.startsWith('blog/')) {
				setPage('blog');
				setBlogId(hash.split('/')[1]);
			} else {
				setPage('home');
				setProjectId(null);
				setBlogId(null);
			}
		};

		// Handle initial page load
		handleHash();
		
		// Listen for hash changes
		window.addEventListener('hashchange', handleHash);
		
		// Cleanup
		return () => window.removeEventListener('hashchange', handleHash);
	}, []);

	const nav = {
		navigateToHome: () => {
			window.location.hash = '';
		},
		navigateToProjects: () => {
			// Check if we're already on the projects page
			if (window.location.hash === '#projects') {
				// Already on projects page, just scroll to top
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			} else {
				// Navigate to projects page
				window.location.hash = '#projects';
			}
		},
		navigateToProject: (id) => {
			window.location.hash = `#project/${id}`;
		},
		navigateToBlogs: () => {
			// Check if we're already on the blogs page
			if (window.location.hash === '#blogs') {
				// Already on blogs page, just scroll to top
				window.scrollTo({
					top: 0,
					behavior: 'smooth'
				});
			} else {
				// Navigate to blogs page
				window.location.hash = '#blogs';
			}
		},
		navigateToBlog: (id) => {
			window.location.hash = `#blog/${id}`;
		}
	};

	if (page === 'projects') return <ProjectsList {...nav} />;
	if (page === 'project') return <ProjectDetail {...nav} projectId={projectId} />;
	if (page === 'blogs') return <BlogsList {...nav} />;
	if (page === 'blog') return <BlogDetail {...nav} blogId={blogId} />;
	return <Home {...nav} />;
}

export default App;
