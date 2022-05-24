import React, { useContext } from 'react';

import CartIcon from '../../../components/shop/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/shop/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../../components/contexts/cart.context';

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
    
    const { isCartOpen } = useContext(CartContext)

    return (
        <div className='navbar-container' >
            <Navbar>
                <NavItem 
                    icon='Index'
                    href='shop'
                />
                <NavItem 
                    icon='Hats'
                    href='hats'
                />
                <NavItem 
                    icon='Cart'
                    href='cart'
                />
            </Navbar>
            {isCartOpen && <CartDropdown />}
            {/* <Outlet /> */}
        </div>
    );
};
  
export default ShopNavigation;
