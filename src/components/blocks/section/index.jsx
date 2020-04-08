import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const Section = props => {
    const { theme } = useContext(ThemeContext);
    return (
        <div id={props.id} className={clsx(`Section-container`, theme, props.accent && 'accent')}>
            <div className="gradient-shadow" />
            <div className="content">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default Section;
