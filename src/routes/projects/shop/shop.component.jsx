import Directory from '../../../components/shop/shop-directory/shop-directory.component';
import ShopNavigation from '../../navigation/shop-navbar/shop-navigation.component';

const Shop = () => {
    
    const categories = [
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
          "href": 'projects/shop/hats'
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
          "href": 'projects/shop/jackets'
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
          "href": 'projects/shop/sneakers'
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
          "href": 'projects/shop/womens'
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
          "href": 'projects/shop/mens'
        }
      ]

    return (
        <div>
            <div className='shop-navbar'>
                <ShopNavigation />
            </div>
            <section>
                <Directory categories={categories} />
            </section>     
        </div>
    );
};

export default Shop;