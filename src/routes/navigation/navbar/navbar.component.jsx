import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom'

import Button from '../../../components/shared/button.component';
import Dropdown from './dropdown.component';

import './navbar.styles.scss'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return (
        <div className='body-container'>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo' >Moorley</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li 
                        className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to='projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav-item'>
                        <Link to='projects/monsters-rolodex' className='nav-links' id='sign-up-item' onClick={closeMobileMenu}>
                            Monsters Rolodex
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects/shop' className='nav-links' id='sign-up-item' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='projects/shop/sign-up' className='nav-links' id='sign-up-item' onClick={closeMobileMenu}>
                            Sign In
                        </Link>
                    </li>
                    
                </ul>
                <Button 
                    href='projects/shop/sign-up'
                    title='Sign In'
                />
            </nav>  
            <Outlet />
        </div>
    );
};

export default Navbar;