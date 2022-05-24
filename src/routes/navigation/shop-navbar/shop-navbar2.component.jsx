import React, { useContext } from 'react';

import CartIcon from '../../../components/shop/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/shop/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../../components/contexts/cart.context';

import './shop-navigation.styles.scss'

const ShopNavigation = () => {

    const { isCartOpen } = useContext(CartContext)

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'><a href='shop'>Shop Index</a></li>
                    <li className='nav-item'><a href='hats'>Hats</a></li>
                    <li className='nav-item'><a href='cart'>Cart</a></li>
                </ul>
            </nav>
            <CartIcon />
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default ShopNavigation;