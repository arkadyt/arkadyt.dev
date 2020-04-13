import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const Link = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={clsx("Link-container", theme)}>
            <a href={props.href} target="_blank" rel="noopener noreferrer">
                {props.ico}<span>{props.title}</span>
            </a>
        </div>
    );
};

export default Link;
