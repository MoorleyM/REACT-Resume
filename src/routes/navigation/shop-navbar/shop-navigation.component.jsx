import React from 'react';

import CartIcon from '../../../components/shop/cart-icon/cart-icon.component';

import './shop-navigation.styles.scss'

const Navbar = (props) => {
    return (
        <nav className='navbar'>
            <div>
                <ul className='navbar-nav' >{ props.children }</ul>
            </div>
            <CartIcon />
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
                <NavItem 
                    icon='Hats'
                    href='shop/hats'
                />
            </Navbar>
            {/* <Outlet /> */}
        </div>
    );
};
  
  export default ShopNavigation;
