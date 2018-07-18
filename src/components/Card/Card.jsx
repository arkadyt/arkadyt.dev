import React from 'react';
import './Card.css';

const card = props => {
    return <div className="Card-container">
        <a href={props.href} target="_blank">
            <img src={props.image} alt='' />
        </a>
        <div className="Card-content">
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <div className="Card-tags">
            {props.tags.map((item, index) => (
                <span key={index} className="Card-tag">{item}</span>
            ))}
            </div>
        </div>
    </div>;
};

export default card;