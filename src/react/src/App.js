import React, { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/home';
import ProjectsList from './pages/projectslist';
import ProjectDetail from './pages/projectdetail';

function App() {
	const [page, setPage] = useState('home');
	const [projectId, setProjectId] = useState(null);

	useEffect(() => {
		const handleHash = () => {
			const hash = window.location.hash.slice(1); // Remove # directly
			
			if (hash === 'projects') {
				setPage('projects');
			} else if (hash.startsWith('project/')) {
				setPage('project');
				setProjectId(hash.split('/')[1]);
			} else {
				setPage('home');
				setProjectId(null);
			}
		};

		handleHash();
		window.addEventListener('hashchange', handleHash);
		return () => window.removeEventListener('hashchange', handleHash);
	}, []);

	const nav = {
		home: () => (window.location.hash = ''),
		projects: () => (window.location.hash = 'projects'),
		project: (id) => (window.location.hash = `project/${id}`)
	};

	if (page === 'projects') return <ProjectsList {...nav} />;
	if (page === 'project') return <ProjectDetail {...nav} projectId={projectId} />;
	return <Home {...nav} />;
}

export default App;
