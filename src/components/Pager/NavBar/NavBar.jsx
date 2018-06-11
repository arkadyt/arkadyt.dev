import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { CoverCtx } from '../../../hocs/withCoverCtx';

import classes from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return <ul className={classes.list}>
            {/* Home button */}
            <CoverCtx.Consumer>
                {context => {
                    return <li>
                        <a href='' 
                            onClick={e => { e.preventDefault(); context.setCoverLifted(false); }}
                            className={classes.Link}>Home</a></li>
                }}
            </CoverCtx.Consumer>

            {Object.keys(this.props.routes).map(url => (
                <li key={url}>
                    <NavLink to={url} className={classes.Link} activeClassName={classes.active}>
                        {this.props.routes[url]}
                    </NavLink>
                </li>
            ))}
        </ul>;
    };
}

export default NavBar;