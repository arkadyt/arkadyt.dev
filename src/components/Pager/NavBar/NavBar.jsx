import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavBar.module.css';

const Link = props => {
    return props.url.indexOf(':') > -1 ?
        <a href={props.url} className={classes.Link} target="_blank">
            {props.children}
        </a> :
        <NavLink to={props.url} className={classes.Link} activeClassName={classes.active}>
            {props.children}
        </NavLink>
}

const navBar = props => {
    return <ul className={classes.list}>
        {Object.keys(props.routes).map(url => {
            if (url.indexOf('spacer') > -1) {
                return <li className={classes.spacer}><hr/></li>
            } else {
                return <li key={url}>
                    <Link url={url}>
                        <span className={classes.content}>
                            {props.routes[url]}
                        </span>
                    </Link>
                </li>
            }
        })}
    </ul>;
}

export default navBar;