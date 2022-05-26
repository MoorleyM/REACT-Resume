import React, { useContext } from 'react';

import CartIcon from '../../../components/shop/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/shop/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../../components/contexts/cart.context';

import './projects-navbar-styles.scss'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div>
                <ul className='navbar-nav' >{ props.children }</ul>
            </div>
            {/* <CartIcon /> */}
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

const ProjectsNavigation = () => {
    
    const { isCartOpen } = useContext(CartContext)

    return (
        <div className='navbar-container' >
            <Navbar>
                <NavItem 
                    icon='Monsters Rolodex'
                    href='monsters-rolodex'
                />
                <NavItem 
                    icon='Shop'
                    href='shop'
                />
            </Navbar>
            {isCartOpen && <CartDropdown />}
            {/* <Outlet /> */}
        </div>
    );
};
  
export default ProjectsNavigation;