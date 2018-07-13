import React from 'react';
import classes from './QuadsMenu.module.css';

const quadsMenu = props => {
    return <div className={classes.container}>
        <img src={props.background} alt='' className={classes.bgimage} />
            {props.items.map((item, index) => {
                return <a href={item.route} className={classes.quad} key={index}>
                        {item.icon}
                        <span>{item.title}</span>
                    </a>;
            })}
        </div>;
};

export default quadsMenu;