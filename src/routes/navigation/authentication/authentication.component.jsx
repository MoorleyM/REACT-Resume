import ShopNavbar from "../shop-navbar/shop-navigation.component";

import SignUpForm from "../../../components/shop/sign-up-form/sign-up-form.component";
import SignInForm from "../../../components/shop/sign-in-form/sign-in-form.component";

import './authentication.styles.scss'

const Authentication = () => {

    return (
        <div>
            <nav className='shop-navbar'>
                <ShopNavbar />
            </nav>
            <section className="authentication-container">
                <SignInForm />
                <SignUpForm />
            </section>     
        </div>
    );
};

export default Authentication;