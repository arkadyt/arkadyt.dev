import React from 'react';
import classes from './Card.module.css';
import image from './RD3CTFQ3_11.jpg';

const card = props => {
    return <div className={classes.container}>
        <img src={image} alt='' />
        <div className={classes.description}>
            <h1 className={classes.header}>{props.header}</h1>
            <p>{props.body}</p>
            <a>{props.url}</a>
        </div>
    </div>;
};

export default card;