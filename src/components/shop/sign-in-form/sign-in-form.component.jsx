import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import ShopButton from '../../shared/buttons/shop-buttons/shop-button.component';

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from '../../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss'

// Creating an empty object to use with useState
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {

    // Using state
    const [formFields, setformFields] = useState(defaultFormFields)
    // Destructuring off defaultFormFields and setting as state
    const { email, password } = formFields;

    // Resetting form fields after user signs up
    const resetFormFields = () => {
        setformFields(defaultFormFields);
    }

    // Making async call to database
    const SignInWithGoogle = async () => {

        // Waiting for response
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            // console.log(response)

            // Calling reset fields function
            resetFormFields();
        } catch (error) {
            // console.log(error)
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Wrong password, Try again.');
                    break;
                case 'auth/user-not-found':
                    alert('User Not Found');
                    break;
                default:
                    console.log(error)
            }
        }
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        // Spreading in the object and setting in the name and value
        setformFields({
            ...formFields,
            [name]: value
        });
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={onSubmitHandler}>

                <FormInput
                    label='Email'
                    required
                    type='email'
                    onChange={onChangeHandler}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    required
                    type='password'
                    onChange={onChangeHandler}
                    name='password'
                    value={password}
                />
                <div className='buttons-container'>
                    <ShopButton type='submit'>Sign In</ShopButton>
                    <ShopButton type='button' buttonType='google' onClick={SignInWithGoogle}>Google Sign In</ShopButton>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;