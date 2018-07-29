import React from 'react';
import './Front.css';
import avatar from '../../images/avatar.jpg';

const front = () => {
    return <div className="Front-container">
        <img src={avatar} alt='' className="photo" />
        <div className="name-block">
            <h1>Andrew</h1><h3>Jefferson</h3><br />
            <span>Software Engineer</span>
            <span>Web Developer</span>
            <span>Level Designer</span>
        </div>
    </div>;
};

export default front;