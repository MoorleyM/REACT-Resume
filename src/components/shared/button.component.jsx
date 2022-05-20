import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.scss'

const Button = () => {
    return (
        <Link to='projects/shop/sign-up'>
            <button className='btn' >Sign Up</button>
        </Link>
    );
};

export default Button;