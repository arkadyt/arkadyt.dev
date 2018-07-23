import React from 'react';
import './ExpCard.css';

/**
 * Work experience card.
 */
const expCard = props => {
    const separatorClass = props.start && props.end ? 'Separator-stick-hidden' :
        props.start ? 'Separator-stick-start' :
            props.end ? 'Separator-stick-end' :
                '';
    return <div className="ExpCard-container">
        <img src={props.image} alt='' className="ExpCard-image" />
        <div className="Separator-container">
            <div className={['Separator-stick', separatorClass].join(' ')} />
            <div className="Separator-circle" />
        </div>
        <div className="ExpCard-text">
            <h4>{props.date}</h4>
            <h2>{props.company}</h2>
            <h3>{props.title}</h3>
        </div>
    </div>;
};

export default expCard;