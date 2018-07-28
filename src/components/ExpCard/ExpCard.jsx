import React from 'react';
import './ExpCard.css';

/**
 * Work experience card.
 */
const expCard = props => {
    const separatorClass = props.start && props.end ? 'stick-hidden' :
        props.start ? 'stick-start' :
            props.end ? 'stick-end' :
                '';
    return <div className="ExpCard-container">
        <img src={props.image} alt='' />
        <div className="Separator-container">
            <div className={['stick', separatorClass].join(' ')} />
            <div className="circle" />
        </div>
        <div className="text">
            <h4>{props.date}</h4>
            <h2>{props.company}</h2>
            <h3>{props.title}</h3>
        </div>
    </div>;
};

export default expCard;