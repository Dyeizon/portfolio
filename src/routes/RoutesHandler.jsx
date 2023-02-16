import { HomePage } from '../pages/HomePage';
import { AboutMePage } from '../pages/AboutMePage';
import { ProjectsPage } from '../pages/ProjectsPage';

import { Routes, Route } from 'react-router-dom';

export const RoutesHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/aboutme" element={<AboutMePage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
        </Routes>
    );
}