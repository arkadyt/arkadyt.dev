import React from 'react';

import { NavLink } from 'react-router-dom';
import { FaCircle } from 'react-icons/lib/fa';

import classes from './NavBar.module.css';

class NavBar extends React.Component {
    render() {
        return <ul className={classes.list}>
            {this.props.urls.map(url => (
                <li key={url}>
                    <NavLink to={url} activeClassName={classes.active}>
                        <FaCircle />
                    </NavLink>
                </li>
            ))}
        </ul>;
    }
};

export default NavBar;