import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ProductCard from '../../../../components/shop/product-card/product-card.component';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';

import './hats.styles.scss'

const HatsPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <div>
            <div className='shop-navbar'>
                <ShopNavigation />
            </div>
            <Fragment>
                {Object.keys(categoriesMap).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {categoriesMap[title].map((product) => (
                                <ProductCard key={product.id} product={product}/>
                            ))}
                        </div>
                    </Fragment>
                ))}
            </Fragment>
        </div>
    );
};

export default HatsPage;