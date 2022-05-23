import ShopNavigation from "../shop-navbar/shop-navigation.component";
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

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
                <button onClick={logGoogleUser} >Sign in With Google</button>
            </section>     
        </div>
    );
};

export default SignIn;