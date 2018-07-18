import React from 'react';
import './NavBar.css';

const navBar = props => {
    return <div className="NavBar-container">
        {props.links.map((item, index) => {
            return <li key={index}>
                <a href={item.href} target="_blank">{item.ico}</a>
            </li>
        })}
    </div>;
};

export default navBar;