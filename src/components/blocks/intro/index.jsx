import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import clsx from 'clsx';
import './styles.scss';

const Front = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={clsx("Front-container", theme)}>
            <div className="name-block">
                <h1>Arkady</h1><h3>Titenko</h3><br />
                <span>Software Developer</span>
                <span>Cloud Solutions Architect</span>
            </div>
        </div>
    );
};

export default Front;
