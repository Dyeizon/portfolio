import { Home } from '../pages/Home';
import { AboutMe } from '../pages/AboutMe';

import { Routes, Route } from 'react-router-dom';

export const RoutesHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
    );
}