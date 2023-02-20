import { HomePage } from '../pages/HomePage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { AboutMePage } from '../pages/AboutMePage';

import { Routes, Route } from 'react-router-dom';

export const RoutesHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/projects" element={<ProjectsPage/>}/>
            <Route path="/aboutme" element={<AboutMePage/>}/>
        </Routes>
    );
}