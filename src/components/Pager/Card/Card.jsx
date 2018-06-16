import React from 'react';
import classes from './Card.module.css';

/**
 * Text (optionally with header and link) next to 
 * custom view or image if no view is passed down
 * (through props.children).
 */
const card = props => {
    return <div className={classes.container}>
        <p>
            <span className={classes.header}>{props.header}</span>
            <br /><br />
            {props.body}
            <br /><br />
            <a>{props.url}</a>
        </p>
        {props.children ? props.children :
            <img src={props.img} alt='' />}
    </div>;
};

export default card;