import { Link } from 'react-router-dom'

import './projects-navbar-styles.scss'

const ProjectsNavigation = () => {

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='../monsters-rolodex'>
                            Monsters Rolodex
                        </Link>
                        <Link to='../shop'>
                            Shop
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default ProjectsNavigation;