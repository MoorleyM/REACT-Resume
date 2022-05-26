import Directory from '../../../../components/shop/shop-directory/shop-directory.component';
import ShopNavbar from '../../../navigation/shop-navbar/shop-navigation.component';
import Footer from '../../../footer/footer.component';

const Shop = () => {
    
    const categories = [
        {
          "id": 1,
          "title": "Hats",
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
          "href": 'hats'
        },
        {
          "id": 2,
          "title": "Jackets",
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
          "href": 'jackets'
        },
        {
          "id": 3,
          "title": "Sneakers",
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
          "href": 'sneakers'
        },
        {
          "id": 4,
          "title": "Womens",
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
          "href": 'womens'
        },
        {
          "id": 5,
          "title": "Mens",
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
          "href": 'mens'
        }
      ]

    return (
        <div>
            <div className='shop-navbar'>
                <ShopNavbar />
            </div>
            <section>
                <Directory categories={categories} />
            </section>
            <Footer />     
        </div>
    );
};

export default Shop;