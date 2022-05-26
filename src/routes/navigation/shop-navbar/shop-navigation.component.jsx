import React, { useContext } from 'react';
import { Link } from 'react-router-dom'

import CartIcon from '../../../components/shop/cart-icon/cart-icon.component';
import CartDropdown from '../../../components/shop/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../../components/contexts/cart.context';

import './shop-navigation.styles.scss'

const ShopNavbar = () => {

    const { isCartOpen } = useContext(CartContext)

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <Link to='shop'>
                            Directory
                        </Link>
                    </li>
                </ul>
                <CartIcon className='icon-button'/>
            </nav>
            {isCartOpen && <CartDropdown />}
        </div>
    );
};

export default ShopNavbar;