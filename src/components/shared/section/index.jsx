import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';
import './styles.mobile.scss';

const Section = props => {
    const { cardStyle } = props;
    const { theme } = useContext(ThemeContext);
    const containerClasses = clsx(
        `Section-container`, theme, props.accent && 'accent',
        cardStyle && 'card-style'
    );

    return (
        <div id={props.id} className={containerClasses}>
            <div className="gradient-shadow" />
            <div className="content">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default Section;
