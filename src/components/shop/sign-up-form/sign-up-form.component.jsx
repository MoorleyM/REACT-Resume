import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import ShopButton from '../../shared/buttons/shop-buttons/shop-button.component';

import { 
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss'

// Creating an empty object to use with useState
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {

    // Using state
    const [formFields, setformFields] = useState(defaultFormFields)
    // Destructuring off defaultFormFields and setting as state
    const { displayName, email, password, confirmPassword } = formFields;

    // Resetting form fields after user signs up
    const resetFormFields = () => {
        setformFields(defaultFormFields);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        // Checking to see if the users input matches, if it doesn't return
        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );
            
            await createUserDocumentFromAuth(user, { displayName });
            // Calling reset fields functoin
            resetFormFields();

        } catch (error) {
            // console.log(error)
            if (error.code === 'auth/email-already-in-use') {
                alert('User already in use.')
            } else if (error.code === 'auth/weak-password') {
                alert('Password needs to be 6 characters or longer')
            } else {
                console.log('User creation encountered an error', error.message)
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
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={onSubmitHandler}>
                <FormInput
                    label='Display Name'
                    required
                    type='text'
                    onChange={onChangeHandler}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    required
                    type='password'
                    onChange={onChangeHandler}
                    name='confirmPassword'
                    value={confirmPassword}
                />
                <ShopButton type='submit'>Sign Up</ShopButton>
            </form>
        </div>
    );
};

export default SignUpForm;