import React from 'react';

import { NavLink } from 'react-router-dom';

import classes from './DotNav.module.css';

const dotNav = props => {
    return <ul className={classes.list}>
        {props.urls.map(url => (
            <li key={url}>
                <NavLink to={url} activeClassName={classes.active}>
                    <div className={classes.button}/>
                </NavLink>
            </li>
        ))}
    </ul>;
}

export default dotNav;