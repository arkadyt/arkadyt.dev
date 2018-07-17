import React from 'react';

const link = props => {
    return <div>
        <div>{props.ico}</div>
        <a href={props.href}>{props.title}</a>
    </div>;
};

export default link;