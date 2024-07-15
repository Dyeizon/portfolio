import './style.css';
import { Link } from 'react-router-dom';

export const Presentation = () => {
    return (
        <div className='container'>
            <section className='presentation'>
                <div>
                    <h2 className='presentation-intro'>Hey, my name is</h2>
                    <h1 className="presentation-name">Dyeizon Procopiuk</h1>
                    <h1 className='presentation-profession'>and I am a Front End Developer</h1>
                    <p className='presentation-about-me'>I am pursuing a Bachelor's degree in Computer Science and working on enhancing my skills in <span style={{fontWeight: 'bold'}}>ReactJS</span> and <span style={{fontWeight: 'bold'}}>Web Design</span>.</p>
                    <Link to="/projects"><button className='presentation-button'>My Projects</button></Link>
                </div>
            </section>
        </div>
    );
}