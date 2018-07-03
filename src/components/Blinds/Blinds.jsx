import React from 'react';
import classes from './Blinds.module.css';

const blinds = (props) => {
    return <div className={classes.blinds}>
        <span className={classes.note}>Development of responsive design is still in progress.<br/><br/>Please visit the website from desktop.<br/><br/>Thank you!</span>    
    </div>;
}

export default blinds;