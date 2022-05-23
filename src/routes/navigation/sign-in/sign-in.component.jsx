import ShopNavigation from "../shop-navbar/shop-navigation.component";
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../../components/shop/sign-up-form/sign-up-form.component";

import './sign-in.styles.scss'

const SignIn = () => {

    // Making async call to database
    const logGoogleUser = async () => {

        // Waiting for response
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };

    return (
        <div>
            <nav className='shop-navbar'>
                <ShopNavigation />
            </nav>
            <section>
                <div>
                    <button onClick={logGoogleUser} >Sign in With Google</button>
                </div>
                <div>
                    <SignUpForm />
                </div>
            </section>     
        </div>
    );
};

export default SignIn;