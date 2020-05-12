import React, { useContext } from 'react';
import ThemeContext from 'state/context/theme';
import StyleContext from 'state/context/style';
import clsx from 'clsx';
import './styles.scss';

const CardContainer = props => {
    const { children, noflip, flipDirection, flat, className } = props;
    const { theme } = useContext(ThemeContext);
    const classNames = [
        className, "Card-container", theme, noflip && 'noflip',
        typeof flipDirection === "string" && `flip-direction--${flipDirection}`
    ];

    return (
        <StyleContext.Provider value={{ flat }}>
            <div className={clsx(...classNames)}>
                {children}
            </div>
        </StyleContext.Provider>
    );
};

export default CardContainer;
