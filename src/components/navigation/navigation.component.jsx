import React from 'react';
import { Outlet} from 'react-router-dom'

import './navigation.styles.scss'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav' >{ props.children }</ul>        
        </nav>
    )
}

const NavItem = (props) => {

    return (
        <li className='nav-item'>
            <a 
                href={ props.href } 
                className='icon-button'>
                { props.icon }
            </a>
        </li>
    );
};

const Navigation = () => {

    return (
        <div className='navbar-container' >
            <Navbar>
                <NavItem 
                    icon='Index'
                    href='/'
                />
                <NavItem 
                    icon='Projects'
                    href='projects'
                />
            </Navbar>
            <Outlet />
        </div>
    );
};
  
  export default Navigation;
