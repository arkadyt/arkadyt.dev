import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';

class NavBar extends Component {
    render() {
        return <ul className={classes.list}>
            {Object.keys(this.props.routes).map(url => (
                <li key={url}>
                    <Link to={url} className={classes.Link}>
                        {this.props.routes[url]}
                    </Link>
                </li>
            ))}
        </ul>;
    };
}

export default NavBar;