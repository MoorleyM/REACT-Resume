import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Outlet} from 'react-router-dom'

import Shop from '../../projects/shop/shop.component';

import './shop-navigation.styles.scss'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <ul className='navbar-nav' >{ props.children }</ul>        
        </nav>
    );
};

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

const ShopNavigation = () => {

    return (
        <div className='navbar-container' >
            <Navbar>
                <NavItem 
                    icon='Index'
                    href='shop'
                />
            </Navbar>
            {/* <Outlet /> */}
        </div>
    );
};
  
  export default ShopNavigation;
