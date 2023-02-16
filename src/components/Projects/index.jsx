import './style.css';
import reactexercisesimage from '../../assets/project-image-reactexercises.png';
import tarotpageimage from '../../assets/project-image-tarotpage.png';

import { Card } from './Card';

export const Projects = () => {
    return (
        <div className='container'>
            <div className="projects">
                <div className="cards">
                    <Card src={tarotpageimage} title="Tarot Page" siteHref="https://dyeizon-tarotpage.netlify.app" githubHref="https://github.com/Dyeizon/TarotPage"/>
                    <Card src={reactexercisesimage} title="React Exercises" siteHref="https://dyeizon-reactexercises.netlify.app/" githubHref="https://github.com/Dyeizon/react-exercises"/>
                    <Card title="Coming Soon" soon/>
                </div>
            </div>
        </div>
    );
}