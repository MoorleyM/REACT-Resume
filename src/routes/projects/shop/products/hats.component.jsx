import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ShopNavigation from '../../../navigation/shop-navbar/shop-navbar.component';
import ProductCard from '../../../../components/shop/product-card/product-card.component';
import Footer from '../../../footer/footer.component';

import './hats.styles.scss'

const HatsPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const titles = Object.values(categoriesMap)

    const hats = Object.values(titles)

    const hatsItems = hats.find(el => el === hats[0])

    return (
        <div>
            <div>
                <ShopNavigation />
            </div>
                <div className='shop-container'>
                    <h2>Hats Shop</h2>
                    <div className='products-container'>
                    <Fragment>
                        {
                            hatsItems && hatsItems.map((items) => (
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

export default HatsPage;