import { useContext } from 'react';

import { CartContext } from '../../../../components/contexts/cart.context';
import ShopNavigation from "../../../navigation/shop-navbar/shop-navbar.component";
import CheckoutItem from '../../../../components/shop/checkout-item/checkout-item.component';
import Footer from '../../../footer/footer.component';

import './cart.styles.scss'

const CartPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div>
            <div className='shop-navbar'>
                <ShopNavigation />
            </div>
            <div className='checkout-container'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {cartItems.map((cartItem) => (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
                <span className='total'>Total: ${cartTotal}</span>
            </div>
            <Footer />
        </div>
    );
};

export default CartPage;