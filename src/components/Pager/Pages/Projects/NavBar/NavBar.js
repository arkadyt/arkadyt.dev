import React from 'react';

import { Link } from 'react-router-dom';
import { FaCircle } from 'react-icons/lib/fa';

import classes from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return <ul className={classes.list}>
            {this.props.urls.map(url => (
                <li key={url}>
                    <Link to={url}>
                        <FaCircle />
                    </Link>
                </li>
            ))}
        </ul>;
    }
};

export default NavBar;