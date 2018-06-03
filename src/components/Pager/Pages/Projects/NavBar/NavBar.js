import React from 'react';

import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/lib/fa';

// elements are automatically targeted in css
// eslint-disable-next-line
import classes from './NavBar.module.css';

const navBar = (props) => {
    return (
        <ul>
            {props.urls.map(url => (
                <li>
                    <Link to={url}>
                        <FaCircle/>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default navBar;