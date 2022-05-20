import React, { useState } from 'react';
import { MenuItems } from './menu-items.component';
import { Link } from 'react-router-dom'

import './dropdown.styles.scss'

const Dropdown = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='dropdown-container'>
            <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link 
                                className={item.cName} 
                                to={item.path} 
                                onClick={() => setClick(false)}
                            >
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;