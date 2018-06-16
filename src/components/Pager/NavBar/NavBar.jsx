import React from 'react';
import { NavLink } from 'react-router-dom';

import { CoverCtx } from '../../../hocs/withCoverCtx';

import classes from './NavBar.module.css';

const navBar = props => {
    return <ul className={classes.list}>
        <CoverCtx.Consumer>
            {context => {
                return <li> {/* Home button */}
                    <a href=''
                        onClick={e => { e.preventDefault(); context.setCoverLifted(false); }}
                        className={classes.Link}>Home</a></li>
            }}
        </CoverCtx.Consumer>
        {Object.keys(props.routes).map(url => (
            <li key={url}>
                <NavLink to={url} className={classes.Link} activeClassName={classes.active}>
                    {props.routes[url]}
                </NavLink>
            </li>
        ))}
    </ul>;
}

export default navBar;