import React from 'react';
import DotNav from '../DotNav/DotNav';
import classes from './Card.module.css';

const card = props => {
    return <div className={classes.container}>
        <img src={props.img} alt='' className={classes.background} />
        <div className={classes.grid}>
            <img src={props.img} alt='' className={classes.widget} />
            <DotNav urls={['0', '1', '2']} />
            <div className={classes.description}>
                <h1 className={classes.header}>{props.header}</h1><br />
                <p>{props.body}</p><br />
                {props.tags.map((item, index) => {
                    return <span key={index} className={classes.tag}>{item}</span>;
                })}<br />
                <a href={props.url}>View on GitHub</a>
            </div>
        </div>
    </div>;
};

export default card;