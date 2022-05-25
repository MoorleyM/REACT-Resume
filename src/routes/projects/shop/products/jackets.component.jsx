import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';
import ProductCard from '../../../../components/shop/product-card/product-card.component';

const JacketsPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const titles = Object.values(categoriesMap)

    const jackets = Object.values(titles)

    const jacketsItems = jackets.find(el => el === jackets[1])

    return (
        <div>
            <div>
                <ShopNavigation />
            </div>
                <div className='shop-container'>
                    <h2>Jackets Shop</h2>
                    <div className='products-container'>
                    <Fragment>
                        {
                            jacketsItems && jacketsItems.map((items) => (
                                <ProductCard key={items.id} product={items} />
                            ))
                        }
                    </Fragment>
                    </div>
                </div>
        </div>
    );
};

export default JacketsPage;