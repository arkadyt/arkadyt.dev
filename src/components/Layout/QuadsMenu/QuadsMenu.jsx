import React from 'react';
import { Link } from 'react-router-dom';
import classes from './QuadsMenu.module.css';

const quadsMenu = props => {
    return <div className={classes.container}>
        <img src={props.background} alt='' className={classes.bgimage} />
        {props.items.map((item, index) => (
            <Link to={item.route} className={classes.quad} key={index}>
                {item.icon}
                <span>{item.title}</span>
            </Link>
        ))}
    </div>;
};

export default quadsMenu;