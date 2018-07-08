import React from 'react';

import { NavLink, withRouter } from 'react-router-dom';

import classes from './DotNav.module.css';

const dotNav = props => {
    return <ul className={classes.list}>
        {props.images.map((url, index) =>
            <li key={index}>
                <NavLink to={`${props.match.url}/${index}`} activeClassName={classes.active}>
                    <div className={classes.button} />
                </NavLink>
            </li>
        )}
    </ul>;
}

export default withRouter(dotNav);