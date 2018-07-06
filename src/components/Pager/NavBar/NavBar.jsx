import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import classes from './NavBar.module.css';
import MdHome from 'react-icons/lib/md/home';

const navBar = props => {
    return <ul className={classes.list}>
        <li>
            <a href=''
                onClick={e => { e.preventDefault(); props.closeCover() }}
                className={classes.Link}>
                <span className={classes.content}>
                    <MdHome />
                </span>
            </a>
        </li>
        {Object.keys(props.routes).map(url => (
            <li key={url}>
                <NavLink to={url} className={classes.Link} activeClassName={classes.active}>
                    <span className={classes.content}>
                        {props.routes[url]}
                    </span>
                </NavLink>
            </li>
        ))}
    </ul>;
}

const mapDispatchToProps = dispatch => {
    return {
        closeCover: () => dispatch({ type: actionTypes.COVER_STATE_CHANGE, payload: false })
    }
}

export default connect(null, mapDispatchToProps)(navBar);