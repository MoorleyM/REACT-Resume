import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';
import ProductCard from '../../../../components/shop/product-card/product-card.component';

const WomensPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const titles = Object.values(categoriesMap)

    const womens = Object.values(titles)

    const womensItems = womens.find(el => el === womens[4])

    return (
        <div>
            <div>
                <ShopNavigation />
            </div>
                <div className='shop-container'>
                    <h2>Womens Shop</h2>
                    <div className='products-container'>
                    <Fragment>
                        {
                            womensItems && womensItems.map((items) => (
                                <ProductCard key={items.id} product={items} />
                            ))
                        }
                    </Fragment>
                    </div>
                </div>
        </div>
    );
};

export default WomensPage;