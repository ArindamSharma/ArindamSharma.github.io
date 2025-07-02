import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import ProjectsList from './pages/projectslist';
import ProjectDetail from './pages/projectdetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsList />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
