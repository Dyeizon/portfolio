import './style.css';
import { Link } from 'react-router-dom';

export const Presentation = () => {
    return (
        <div className='container'>
            <section className='presentation'>
                <div>
                    <h2>Hey, my name is</h2>
                    <h1 className="presentation-name">Dyeizon Procopiuk</h1>
                    <h1 className='presentation-profession'>and I am a Front End Developer</h1>
                    <p className='presentation-about-me'>I am studying for a Bachelors' degree in Computer Science.<br/>Currently improving my <span style={{fontWeight: 'bold'}}>ReactJS</span> and <span style={{fontWeight: 'bold'}}>Web Design</span> skills.<br/>And this is my portfolio, ladies and gentleman.</p>
                    <Link to="/projects"><button className='presentation-button'>My Projects</button></Link>
                </div>
            </section>
        </div>
    );
}