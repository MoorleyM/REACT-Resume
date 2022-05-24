import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context';

import ShopButton from '../../shared/buttons/shop-buttons/shop-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext)

    const navigate = useNavigate();
    const gotToCheckoutHandler = () => {
        navigate('../cart')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />))}
            </div>
            <ShopButton onClick={gotToCheckoutHandler} >Checkout</ShopButton>
        </div>
    );
};

export default CartDropdown;