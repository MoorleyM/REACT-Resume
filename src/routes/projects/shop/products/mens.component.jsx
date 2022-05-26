import { useContext, Fragment } from 'react'

import { CategoriesContext } from '../../../../components/contexts/categories.context';
import ShopNavbar from '../../../navigation/shop-navbar/shop-navigation.component';
import ProductCard from '../../../../components/shop/product-card/product-card.component';
import Footer from '../../../footer/footer.component';

const MensPage = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    const titles = Object.values(categoriesMap)

    const mens = Object.values(titles)

    const mensItems = mens.find(el => el === mens[2])

    return (
        <div>
            <div>
                <ShopNavbar />
            </div>
                <div className='shop-container'>
                    <h2>Mens Shop</h2>
                    <div className='products-container'>
                    <Fragment>
                        {
                            mensItems && mensItems.map((items) => (
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

export default MensPage;