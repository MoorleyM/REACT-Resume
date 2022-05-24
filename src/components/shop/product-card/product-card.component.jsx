
import './product-card.styles.scss'

import ShopButton from '../../shared/buttons/shop-buttons/shop-button.component';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <ShopButton buttonType='inverted'>Add to Cart</ShopButton>
        </div>
    );
};

export default ProductCard;