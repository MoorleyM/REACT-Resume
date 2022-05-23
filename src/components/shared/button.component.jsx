import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.scss'

const Button = (props) => {
    return (
        <Link to={props.href}>
            <button className='btn' >{props.title}</button>
        </Link>
    );
};

export default Button;