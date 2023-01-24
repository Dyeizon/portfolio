import { Container } from 'react-bootstrap';
import './header.css';

export const Header = () => {
    return (
        <Container>
            <header>
                <nav>
                    <p className='header-name'>Dyeizon Procopiuk</p>
                    <ul className='header-list'>
                        <li className='header-list-item'><button>About me</button></li>
                        <li className='header-list-item'><button>Projects</button></li>
                        <li className='header-list-item'><button>Contacts</button></li>
                    </ul>
                </nav>
            </header>
        </Container>
    );
}