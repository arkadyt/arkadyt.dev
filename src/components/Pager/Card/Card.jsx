import React from 'react';
import classes from './Card.module.css';
// import image from './RD3CTFQ3_11.jpg';

const card = props => {
    return <div className={classes.container}>
        <img src={props.img} alt='' className={classes.background} />
        <img src={props.img} alt='' className={classes.widget} />
        <div className={classes.description}>
            <h1 className={classes.header}>{props.header}</h1><br />
            <p>{props.body}</p><br />
            <a href={props.url}>View on GitHub</a>
        </div>
    </div>;
};

export default card;