import React from 'react';
import classes from './ProjectCard.module.css';

const projectCard = (props) => {
    return (
        <div className={classes.container}>
            <p>
                <span className={classes.header}>{props.header}</span>
                <br/><br/>
                {props.children}
                <br/><br/>
                <a>{props.url}</a>
            </p>
            <img src={props.img} alt='' />
        </div>
    );
};

export default projectCard;