import React from 'react';

const card = props => {
    return <div>
        <a href={props.href} target="_blank">
            <img src={props.image} alt='' />
        </a>
        <h4>{props.title}</h4>
        <span>{props.description}</span>
        {props.tags.map((item, index) => {
            <span key={index}>{item}</span>
        })}
    </div>;
};

export default card;