import React from 'react';
import './Card.css';
import IconHref from 'react-icons/lib/fa/external-link';

const card = props => {
    return <div className="Card-container">
        <a href={props.href} target="_blank" className="Card-container">
            <img src={props.image} alt='' />
            <div className="description">
                <h3>{props.title}</h3>
                <span>{props.description}</span>
                <div className="tags">
                    {props.tags.map((item, index) => (
                        <span key={index}>{item}</span>
                    ))}
                </div>
            </div>
        </a>
        <div className="backface">
            {props.links.map((item, index) => {
                return <a key={index} href={item.href} target="_blank">
                    {item.title}&nbsp;&nbsp;<IconHref />
                </a>
            })}
        </div>
    </div>;
};

export default card;