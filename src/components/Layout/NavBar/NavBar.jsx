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
        {props.routes.map((item, index) => {
            // console.log('LOGG', typeof item.url);
            if (item.url.indexOf('spacer') > -1) {
                return <li key={-1} className={classes.spacer}><hr /></li>
            } else {
                return <li key={index}>
                    <Link url={item.url}>
                        <span className={classes.content}>
                            {item.ico}
                        </span>
                    </Link>
                </li>
            }
        })}
    </ul>;
}

export default navBar;