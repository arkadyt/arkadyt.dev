import React from 'react';
import styles from './MenuItem.css.js';

const menuItem = (props) => {
    let style = styles.menuItem;
    if (props.highlighted) {
        style = styles.menuItemHighlighted;
    }
    return <li onClick={() => props.onClick(props.id)} style={style}>{props.title}</li>;
}

export default menuItem;