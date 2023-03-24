import './style.css';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
    const [closeMenu, setCloseMenu] = useState(false);

    return (
        <div className="container">
            <header>
                <nav>
                    <Link to="/"><p className='header-name'>Dyeizon Procopiuk</p></Link>

                    <ul className={`header-list${closeMenu ? ' mobile' : ''}`}>
                        <Link to="/" className='header-list-item'><button>Home</button></Link>
                        <Link to="/projects" className='header-list-item'><button>Projects</button></Link>
                        <Link to="/aboutme" className='header-list-item'><button>About me</button></Link>
                    </ul>
                    <button className='menu-icon-button' onClick={() => setCloseMenu(!closeMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <line x1="3" x2="21" y1="12" y2="12" />
                            <line x1="3" x2="21" y1="18" y2="18" />
                        </svg>
                    </button>
                </nav>
            </header>
        </div>
    );
}