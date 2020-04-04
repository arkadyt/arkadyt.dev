import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import './styles.scss';

const Section = props => {
    const { theme } = useContext(ThemeContext);
    const sectionBg = props.blue ? 'blue' : theme === 'dark' ? 'dark' : '';
    return (
        <div id={props.id} className={`Section-container ${sectionBg}`}>
            <div className="content">
                <h1>{props.title}</h1>
                {props.children}
            </div>
        </div>
    );
};

export default Section;
