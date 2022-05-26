import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';
import ProductCard from '../../../../components/shop/product-card/product-card.component';
import Footer from '../../../footer/footer.component';

const SneakersPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const titles = Object.values(categoriesMap)

    const sneakers = Object.values(titles)

    const sneakersItems = sneakers.find(el => el === sneakers[3])

    return (
        <div>
            <div>
                <ShopNavigation />
            </div>
                <div className='shop-container'>
                    <h2>Sneakers Shop</h2>
                    <div className='products-container'>
                    <Fragment>
                        {
                            sneakersItems && sneakersItems.map((items) => (
                                <ProductCard key={items.id} product={items} />
                            ))
                        }
                    </Fragment>
                    </div>
                </div>
            <Footer />
        </div>
    );
};

export default SneakersPage;