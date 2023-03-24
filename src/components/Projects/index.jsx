import './style.css';
import reactexercisesimage from '../../assets/project-image-reactexercises.png';
import arcannus from '../../assets/project-image-tarotpage.png';

import { Card } from './Card';

export const Projects = () => {
    return (
        <div className='container'>
            <h1 className='projects-title text-center'>My Projects</h1>
            <div className="projects">
                <div className="cards">
                    <Card src={arcannus} title="Arcannus" siteHref="https://dyeizon-arcannus.netlify.app" githubHref="https://github.com/Dyeizon/arcannus"/>
                    <Card src={reactexercisesimage} title="React Exercises" siteHref="https://dyeizon-reactexercises.netlify.app/" githubHref="https://github.com/Dyeizon/react-exercises"/>
                    <Card title="Coming Soon" soon/>
                    <Card title="Coming Soon" soon/>
                    <Card title="Coming Soon" soon/>
                    <Card title="Coming Soon" soon/>
                </div>
            </div>
        </div>
    );
}
