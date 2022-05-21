import ShopNavigation from "../shop-navbar/shop-navigation.component";

import './sign-in.styles.scss'

const SignIn = () => {
    return (
        <div>
            <navbar className='shop-navbar' >
                <ShopNavigation />
            </navbar>
            <section>
                <h1>Sign In</h1>
            </section>     
        </div>
    );
};

export default SignIn;