import './style.css';

import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="container">
            <header>
                <nav>
                    <Link to="/"><p className='header-name'>Dyeizon Procopiuk</p></Link>
                    <ul className='header-list'>
                        <Link to="/" className='header-list-item'><button>Home</button></Link>
                        <Link to="/projects" className='header-list-item'><button>Projects</button></Link>
                        <Link to="/aboutme" className='header-list-item'><button>About me</button></Link>
                    </ul>
                </nav>
            </header>
        </div>
    );
}