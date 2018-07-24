import React from 'react';
import './Card.css';
import IconHref from 'react-icons/lib/fa/external-link';

const card = props => {
    return <div className="Card-container">
        <a href={props.href} target="_blank">
            <img src={props.image} alt='' />
        </a>
        <div className="description">
            <h3>{props.title}</h3>
            <span>{props.description}</span>
            <div className="tags">
                {props.tags.map((item, index) => (
                    <span key={index}>{item}</span>
                ))}
            </div>
            <div className="links">
                {props.links.map((item, index) => {
                    let className, title;
                    if (item.includes('youtu'))
                        className = title = 'YouTube';
                    else if (item.includes('github'))
                        className = title = 'GitHub';
                    else className = title = 'Link';
                    return <a key={index} href={item} target="_blank">
                        <span className={className}>
                            {title}&nbsp;&nbsp;<IconHref />
                        </span>
                    </a>
                })}
            </div>
        </div>
    </div>;
};

export default card;