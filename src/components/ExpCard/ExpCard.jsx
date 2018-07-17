import React from 'react';

/**
 * Work experience card.
 */
const expCard = props => {
    return <div>
        <img src={props.image} alt='' />
        <div id="separator"/>
        <div>
            <h5>{props.date}</h5>
            <h3>{props.company}</h3>
            <h4>{props.title}</h4>
        </div>
    </div>;
};

export default expCard;