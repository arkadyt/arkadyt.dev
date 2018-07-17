import React from 'react';

const navBar = props => {
    return <div>
        {props.links.map((item, index) => {
            return <li key={index}>
                <a href={item.href} target="_blank">{item.title}</a>
            </li>
        })}
    </div>;
};

export default navBar;