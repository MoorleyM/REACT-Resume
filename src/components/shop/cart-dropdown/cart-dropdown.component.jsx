import ShopButton from '../../shared/buttons/shop-buttons/shop-button.component';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                <ShopButton>Checkout</ShopButton>
            </div>
        </div>
    );
};

export default CartDropdown;