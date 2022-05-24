import { useContext } from 'react';

import { ProductsContext } from '../../../../components/contexts/products.context';
import ProductCard from '../../../../components/shop/product-card/product-card.component';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';

import './hats.styles.scss'

const HatsPage = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div>
            <div className='shop-navbar'>
                <ShopNavigation />
            </div>
            <div className='products-container'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    );
};

export default HatsPage;